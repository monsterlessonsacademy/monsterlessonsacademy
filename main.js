// function getItem() {
//   console.log(this);
// }

// getItem();

// const item = {
//   title: "Ball",
//   getItem() {
//     console.log(this.title);
//   },
// };

// item.getItem();

class Item {
  title = "Ball";

  getItem() {
    [1, 2, 3].map((item) => {
      console.log(this);
    });
    // function someFn() {
    //   console.log(this);
    // }
    // someFn();
  }
}

const item = new Item();
item.getItem();
