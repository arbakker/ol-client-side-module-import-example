import { default as ImageLayer } from 'https://esm.run/ol@6.9.0/src/layer/Image';
import { default as ImageWMS } from 'https://esm.run/ol@6.9.0/src/source/ImageWMS';
import { default as olMap } from 'https://esm.run/ol@6.9.0/src/Map';
import { default as View } from 'https://esm.run/ol@6.9.0/src/View';
import { default as TileLayer } from 'https://esm.run/ol@6.9.0/src/layer/Tile';
import { default as OSM } from 'https://esm.run/ol@6.9.0/src/source/OSM';

console.log(olMap)
const osmSource = new OSM()
const layers = [
    new TileLayer({
        source: osmSource,
    }),
    new ImageLayer({
        extent: [-13884991, 2870341, -7455066, 6338219],
        source: new ImageWMS({
            url: 'https://ahocevar.com/geoserver/wms',
            params: { 'LAYERS': 'topp:states' },
            ratio: 1,
            serverType: 'geoserver',
        }),
    }),
];
const test = new olMap({})
test.setTarget(document.getElementById('map'))
test.setLayers(layers)
// somehow promise is expected instead of view object
const myPromise = new Promise((resolve, reject) => {
    resolve(
        {
            center: [-10997148, 4569099],
            zoom: 4,
        }
    );
});
test.setView(myPromise)
