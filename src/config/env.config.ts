type Env = Record<string, { key: string; type: string | number | boolean }>;
type ConfigType<T extends Env> = { [Key in keyof T]: T[Key]['type'] };

const env = {
  baseUrl: { key: 'BASE_URL', type: String() },
  apiUrl: { key: 'VITE_API_URL', type: String() },
  port: { key: 'VITE_PORT', type: Number() },
  mode: { key: 'MODE', type: String() },
  isDev: { key: 'DEV', type: Boolean() },
  isProd: { key: 'PROD', type: Boolean() },
} satisfies Env;

export type Config = ConfigType<typeof env>;

export const config = Object.entries(env).reduce((acc, [key, value]) => {
  // @ts-expect-error just because
  acc[key] = checkEnv(value.key, value.type);
  return acc;
}, {} as Config);

function checkEnv(env: string, type: string | number | boolean): string | number | boolean {
  const envValue = import.meta.env[env];
  if (envValue === undefined) {
    throw new Error(`Check that '${env}' really exist in your .env file`);
  }

  switch (typeof type) {
    case 'string':
      return envValue;
    case 'number':
      return parseInt(envValue, 10);
    case 'boolean':
      return !!envValue;
    default:
      throw new Error('Wrong env type, expected string | number | boolean');
  }
}
