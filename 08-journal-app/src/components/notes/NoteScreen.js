import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          name="comments"
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://evasion-online.com/image-photo/angleterre+photo+image+et+drapeau/(Image)-image-Angleterre-Londres-Tower-Bridge-527-fo_116917227-09032017.jpg"
            alt="landscape"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
