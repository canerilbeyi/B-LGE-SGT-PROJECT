import UserCards from "./components/UserCards";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context/context";
import Loading from "./components/Loading";
import DeleteModal from "./components/DeleteModal";
function App() {
  const { people, loading, openModalForAdding } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div className=" section people-page">
      <button
        type="button"
        className="btn add-person-btn"
        onClick={openModalForAdding}
      >
        add person
      </button>
      <section className="cards-container">
        {people
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((user) => {
            return <UserCards key={user.id} {...user} />;
          })}
      </section>
      <Modal />
      <DeleteModal />
    </div>
  );
}

export default App;
