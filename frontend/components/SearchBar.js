import React from 'react'
export const SearchBar = ({ handleChange, handleSubmit, initialValue }) => (
  <div
    class="row"
    style={{
      margin: 15,
      width: '60%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}
  >
    <div class="">
      <form
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div class="input-field">
          <i class="material-icons prefix blue-text text-darken-4">search</i>
          <input
            id="search"
            name="search"
            class="blue-text text-darken-4"
            type="search"
            placeholder="Search"
            required
            onChange={e => handleChange(e.target.value)}
            value={initialValue}
          />
          {/* <label for="search" class="blue-text text-darken-2">
            Search
          </label> */}
          <i
            class="material-icons small blue-text text-darken-4"
            onClick={handleSubmit}
          >
            send
          </i>
        </div>
      </form>
    </div>
  </div>
)
