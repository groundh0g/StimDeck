export const SCRIPT_STRIP_HEADER = `
    setTimeout(() => {
        window.document.querySelectorAll(".guestHeader").forEach((element) => {
            element.style = "display:none;";
        });
        window.document.querySelectorAll("#__scroll-root").forEach((element) => {
            element.style = "padding-top:52px;";
        });
    }, 100);
`;

export const SCRIPT_SET_THEME = (isDarkMode = false) => `
    setTimeout(() => {
        window.document.querySelectorAll("html").forEach((element) => {
            element.dataset.theme = "${isDarkMode ? "dark" : "light"}";
        });
    }, 100);
`;

export const SCRIPT_HIDE_BLACKLISTED = `
    function hideBlacklistPosts() {
        window.document.querySelectorAll("div[data-testid]").forEach((element) => {
            const contents = element.innerHTML;
            if(contents && contents.toLowerCase().indexOf("temu.com") >= 0) {
                element.hidden = true;
            }
        });
    }
    
    if(!window.alreadyRegistered) {
        setInterval(() => {
            hideBlacklistPosts();
        }, 500);
    }
    window.alreadyRegistered = true;
`;

