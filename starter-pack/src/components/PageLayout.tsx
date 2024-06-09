import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  return (

    <>
      <h1 className="">
        {title}
      </h1>
      <div className="">{children}</div>
    </>
  );
}
