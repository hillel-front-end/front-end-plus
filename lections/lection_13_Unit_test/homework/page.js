window.__page = document.body;

function select(allowed) {
    if (allowed) {
        this.__page.removeClass('page_select_disabled');
    }
    else {
        this.__page.addClass('page_select_disabled');
    }
};

function scroll(allowed) {
    if (allowed) {
        this.__page.removeClass('page_scroll_disabled');
    }
    else {
        this.__page.addClass('page_scroll_disabled');
    }
};

function confirm(text) {
    return window.confirm($filter('L10n')(text));
};