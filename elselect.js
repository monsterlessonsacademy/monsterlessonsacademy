const elSelect = ($parentElement, options) => {
  let $selectedValue;
  let $container;
  let $list;
  let $optionsElements;
  let selectedOption;
  const placeholder = "Please select";

  const setupDomElements = () => {
    $container = document.createElement("div");
    $container.classList.add("el-select");
    $container.setAttribute("tabindex", 0);

    $selectedValue = document.createElement("div");
    $selectedValue.classList.add("selected-value");

    $list = document.createElement("div");
    $list.classList.add("list");
    $optionsElements = options.availableOptions.map((availableOption) => {
      const element = document.createElement("div");
      element.innerText = availableOption.name;
      element.dataset.id = availableOption.id;
      element.classList.add("list-option");
      return element;
    });

    emptyListOption = document.createElement("div");
    emptyListOption.innerText = placeholder;
    emptyListOption.classList.add("list-option");

    $optionsElements = [emptyListOption, ...$optionsElements];

    $list.append(emptyListOption);
    $list.append(...$optionsElements);

    $parentElement.append($container);
    $container.append($selectedValue);
    $container.append($list);
  };

  const setSelectedOption = (selectedOptionId) => {
    if (!selectedOptionId) {
      selectedOption = null;
      $selectedValue.innerText = placeholder;
      return;
    }

    selectedOption = options.availableOptions.find(
      (availableOption) => availableOption.id === selectedOptionId
    );

    $selectedValue.innerText = selectedOption.name;
  };

  const toggleSelect = () => {
    $list.classList.toggle("is-visible");
  };

  const initializeListeners = () => {
    $selectedValue.addEventListener("click", () => {
      toggleSelect();
    });

    $optionsElements.forEach((optionElement) => {
      optionElement.addEventListener("click", () => {
        toggleSelect();
        setSelectedOption(optionElement.dataset.id);
      });
    });

    $container.addEventListener("blur", () => {
      $list.classList.remove("is-visible");
    });
  };

  setupDomElements();
  setSelectedOption(options.selectedOptionId);
  initializeListeners();
};
