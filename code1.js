// (this.router.state["view"]["data"] || {})["menuOpen"] &&
//   this.router.navigateBack();
//

const isMenuOpened = R.pathOr(
  false,
  ["state", "view", "data", "menuOpen"],
  this.router
);
if (isMenuOpened) {
  this.router.navigateBack();
}
