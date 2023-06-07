import { Outlet } from "react-router-dom";
import { getContacts } from "../contacts";
import { todoListState } from "../store/atom";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../store/selector";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {

    const todoList = useRecoilValue(todoListState);

    const {
      totalNum
    } = useRecoilValue(todoListStatsState);
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <br/>
          <h2>Total items: {totalNum}</h2>
          <div>
        
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/todo`}>Todo</a>
              </li>
              {todoList?.map((todo) => (
                <li key={todo.id}>
                  <a href={`/contacts/${todo.id}`}>{todo.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div id="detail">
          {" "}
          <Outlet />
        </div>
      </>
    );
  }