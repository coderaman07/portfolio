import data from '../components/Data.json';
const Sitemap = () => { };
const domainName = data.blogURI;

let routeName = [
    `${data.domainName}`,
    `${data.domainName}/projects`,
    `${data.domainName}/blogs`,
]

const toUrl = (route) =>
    `<url>
        <loc>${domainName}posts/${route.slug}</loc>
        <changefreq> daily </changefreq>
        <priority> 1 </priority>
        <lastmod> ${route.date}T${route.Time}Z </lastmod>
    </url>`;

const toUrlBase = (routeNameObj) =>
    `<url>
        <loc>${routeNameObj}</loc>
        <changefreq> always </changefreq>
        <priority> 0.8 </priority>
    </url>`;

const createSitemap = (urlList) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${routeName.map((routeNameObj) => toUrlBase(routeNameObj)).join("")}
    ${urlList.map((url) => toUrl(url)).join("")}
    </urlset>`;

export async function getServerSideProps({ res, req }) {
    const siteMapJson = await fetch(`https://blogx.pythonanywhere.com/all/`);
    const urlList = await siteMapJson.json();
    const sitemap = createSitemap(urlList);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: { urlList } } }
};
export default Sitemap;