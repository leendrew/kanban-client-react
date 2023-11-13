import { useTypedSelector } from '@/store';
import { useGetAllBoardsQuery } from '@/store/boards';

export function Home() {
  const user = useTypedSelector((state) => state.auth.user!);
  const { data } = useGetAllBoardsQuery(user.id);

  return (
    <>
      home
      {JSON.stringify(data)}
    </>
  );
}
