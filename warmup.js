let bookNameFromUser = document.getElementById("bookName");
let imgUrlFromUser = document.getElementById("imgUrl");
let liToDelete = document.getElementById("");

function handleAddBtn() {
  let newItem = document.createElement("li");
  document.getElementById(
    "booksUl"
  ).innerHTML += `<li class="d-flex align-items-center list-group-item">
        <img
          src="${imgUrlFromUser.value}"
          alt="book img"
          height="18%"
          width="12%"
        />
        <h5 class="m-5">${bookNameFromUser.value}</h5>

        <button
          onclick="handleDeleteBtn(this)"
          type="button"
          class="btn btn-danger mt-3"
        >
          Delete
        </button>

      </li>`;
}
function handleDeleteBtn(ele) {
  let item = ele.parentNode;
  item.parentNode.removeChild(item);
}
