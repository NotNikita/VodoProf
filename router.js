const routes = {
    '/': index,
    '/contact': contact,
    '/info': info,
    '/product': product,
    '/about': about,
    '/404': notFound
};

const scripts = {
    '/': "./scripts/catalog.js",
    '/product': "./scripts/product.js"
}


function getPathWithoutParams(pathname) {
    let startParamsIndex = pathname.indexOf('?');
    if (startParamsIndex != -1) {
        return pathname.slice(0, startParamsIndex);
    }
    return pathname;
}

function addScript(pathname) {
    var scriptSrc = scripts[pathname];
    var script = document.createElement("script");
    script.src = scriptSrc;
    rootDiv.appendChild(script);
}

async function addContent(pathname) {
    console.log('ADDCONTENT FUNC WITH PARAM= ' + pathname)

    pathname = getPathWithoutParams(pathname);
    if (pathname in routes) {
        console.log('ADDCONTENT FUNC')
        rootDiv.innerHTML = routes[pathname];
        if (pathname in scripts) {
            addScript(pathname);
        }
    }
    else {
        onNavigate('/404');
    }
}

const onNavigate = (pathname) => {
    console.log('onNavigate WITH PARAM= ' + pathname)
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    addContent(pathname);
}

window.onpopstate = () => {
    addContent(window.location.pathname);
}

const rootDiv = document.getElementById('root');
addContent(window.location.pathname);