import { default as ImageLayer } from 'https://esm.run/ol@6.9.0/src/layer/Image';
import { default as ImageWMS } from 'https://esm.run/ol@6.9.0/src/source/ImageWMS';
import { default as Map } from 'https://esm.run/ol@6.9.0/src/Map';
import { default as View } from 'https://esm.run/ol@6.9.0/src/View';
import { default as TileLayer } from 'https://esm.run/ol@6.9.0/src/layer/Tile';
import { default as OSM } from 'https://esm.run/ol@6.9.0/src/source/OSM';

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
            ratio: 1
        }),
    }),
];
const map = new Map({})
map.setTarget(document.getElementById('map'))
map.setLayers(layers)
// somehow promise is expected instead of view object https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#setView
const viewOptions = new Promise((resolve, reject) => {
    resolve(
        {
            center: [-10997148, 4569099],
            zoom: 4,
        }
    );
});
map.setView(viewOptions)
