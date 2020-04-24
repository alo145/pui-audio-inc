function searchBarModule() {
    var numberOfAdvBars = document.getElementsByClassName('header__searchbar').length;
    for (var i = 0; i < numberOfAdvBars; i++) {
        (function() {
            var ImageButton = document.getElementsByClassName('search-button')[i];
            var TextBoxInput = document.getElementsByClassName('search-textbox')[i];
            var DropDownList = document.getElementsByClassName('search-product-categories')[i];

            if (typeof window.searchOptions !== "undefined" && DropDownList.options.length === 0) {
                var searchOptionsLength = window.searchOptions.length;
                for (var j = 0; j < searchOptionsLength; j++) {
                    var option = document.createElement("option");
                    option.text = window.searchOptions[j].Text;
                    option.value = window.searchOptions[j].Value;
                    if (window.searchOptions[j].IsSelected) {
                        option.selected = true;
                    }
                    option.setAttribute("data-name", window.searchOptions[j].DataName);
                    DropDownList.appendChild(option);
                }
            }

            function doHpSearch(e) {
                e.preventDefault();
                var SelectedValue = DropDownList.options[DropDownList.selectedIndex].value;
                SelectedValue = SelectedValue.replace('{0}', encodeURIComponent(TextBoxInput.value));

                // Add utag value to get picked up on Firefox
                if (typeof window.utag !== "undefined" && typeof window.utag.dkCookie !== "undefined") {
                    utag.dkCookie("ref_page_event=Initiate Search");
                }
                
                window.location.href = window.location.protocol + '//' + window.location.hostname + SelectedValue;
            }
            function keypressDoHpSearch(e) {
                if (e.keyCode === 13) {
                    doHpSearch(e);
                }
            }
            
            ImageButton.addEventListener('click', doHpSearch, false);
            TextBoxInput.addEventListener('keydown', keypressDoHpSearch, false);
        }());
    }
}
;