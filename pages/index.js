import Head from "next/head";
import Homeapp from "./home";


export default function Home({ initialTasks }) {
  console.log('fg: ', initialTasks)
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Task Manager by Shubham Gupta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homeapp initialTasks={initialTasks} />

      {/* <footer className='footer'>
        <a
          href="https://github.com/Shubhcs01"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build by ❤️ shubham gupta
        </a>
      </footer> */}
    </>
  );
}

export async function getServerSideProps() {
  const initialTasks = [
    { id: 1, title: 'Task One', description: 'In publishing and graphic design, Loram ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Loram ipsum may be used as a placeholder before the final copy ', priority: 'high', completed: false },
    { id: 2, title: 'Task Two', description: 'In publishing and graphic design, Loram ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Loram ipsum may be used as a placeholder before the final copy ', priority: 'medium', completed: false },
    { id: 3, title: 'Task Three', description: 'In publishing and graphic design, Loram ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Loram ipsum may be used as a placeholder before the final copy ', priority: 'low', completed: true },
  ];

  return { props: { initialTasks } };
}
