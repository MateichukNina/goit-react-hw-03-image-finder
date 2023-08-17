export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          name="query"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
