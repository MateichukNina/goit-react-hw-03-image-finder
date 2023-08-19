import React from 'react';


export const Searchbar = ({ onSubmit }) => {
  console.log('Form submitted');
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          name="query"
          type="text"
          // autoсomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
