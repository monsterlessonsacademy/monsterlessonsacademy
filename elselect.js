const elselect = ($parentElement, options) => {
  console.log("elselect", $parentElement, options);
  let $container;
  let $selectedValue;
  let $list;
  let $optionsElements;
  let selectedOption;
  const placeholder = "Please select";

  const setupDomElement = () => {
    $container = document.createElement("div");
    $container.classList.add("el-select");
    $container.setAttribute("tabindex", 0);

    $selectedValue = document.createElement("div");
    $selectedValue.classList.add("selected-value");

    $list = document.createElement("div");
    $list.classList.add("list");

    $optionsElements = options.availableOptions.map((availableOption) => {
      const $element = document.createElement("div");
      $element.classList.add("list-option");
      $element.innerText = availableOption.name;
      $element.dataset.id = availableOption.id;
      return $element;
    });

    const emptyListOption = document.createElement("div");
    emptyListOption.innerText = placeholder;
    emptyListOption.classList.add("list-option");

    $optionsElements = [emptyListOption, ...$optionsElements];

    $parentElement.append($container);
    $container.append($selectedValue);
    $container.append($list);
    $list.append(...$optionsElements);
  };

  const initializeListeners = () => {
    $selectedValue.addEventListener("click", () => {
      console.log("clicked");
      $list.classList.toggle("is-visible");
    });

    $optionsElements.forEach(($optionElement) => {
      $optionElement.addEventListener("click", () => {
        $list.classList.remove("is-visible");
        setSelectedOption($optionElement.dataset.id);
      });
    });

    $container.addEventListener("blur", () => {
      $list.classList.remove("is-visible");
    });
  };

  const setSelectedOption = (selectedOptionId, isInitialSelect = false) => {
    if (!selectedOptionId) {
      selectedOption = null;
      $selectedValue.innerText = placeholder;
      if (!isInitialSelect) {
        options.onOptionChange(null);
      }
      return;
    }

    selectedOption = options.availableOptions.find(
      (availableOption) => availableOption.id === selectedOptionId
    );
    $selectedValue.innerText = selectedOption.name;
    if (!isInitialSelect) {
      options.onOptionChange(selectedOption);
    }
  };

  setupDomElement();
  setSelectedOption(options.selectedOptionId, true);
  initializeListeners();
};
