var wms_layers = [];

var lyr_Skrmkortdmpet_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.datafordeler.dk/Dkskaermkort/topo_skaermkort/1.0.0/wms?apikey=TYcMiW7gGPaWsSsBBaVaCM4HR6WoVVhTGFphSUDF99lJt8wKxtbvHWHj2FUAgBVSnoYCs8WG4GFeNKqBsv0lQzdcQ0gChJjag",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dtk_skaermkort_daempet",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Skærmkort - dæmpet',
                            popuplayertitle: 'Skærmkort - dæmpet',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Skrmkortdmpet_0, 0]);
var format_SGAVmlesteder_1 = new ol.format.GeoJSON();
var features_SGAVmlesteder_1 = format_SGAVmlesteder_1.readFeatures(json_SGAVmlesteder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGAVmlesteder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SGAVmlesteder_1.addFeatures(features_SGAVmlesteder_1);
var lyr_SGAVmlesteder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SGAVmlesteder_1, 
                style: style_SGAVmlesteder_1,
                popuplayertitle: 'SGAV - målesteder',
                interactive: true,
                title: '<img src="styles/legend/SGAVmlesteder_1.png" /> SGAV - målesteder'
            });
var format_DNmlesteder_2 = new ol.format.GeoJSON();
var features_DNmlesteder_2 = format_DNmlesteder_2.readFeatures(json_DNmlesteder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DNmlesteder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DNmlesteder_2.addFeatures(features_DNmlesteder_2);
var lyr_DNmlesteder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DNmlesteder_2, 
                style: style_DNmlesteder_2,
                popuplayertitle: 'DN - målesteder',
                interactive: true,
                title: '<img src="styles/legend/DNmlesteder_2.png" /> DN - målesteder'
            });

lyr_Skrmkortdmpet_0.setVisible(true);lyr_SGAVmlesteder_1.setVisible(true);lyr_DNmlesteder_2.setVisible(true);
var layersList = [lyr_Skrmkortdmpet_0,lyr_SGAVmlesteder_1,lyr_DNmlesteder_2];
lyr_SGAVmlesteder_1.set('fieldAliases', {'fid': 'fid', 'StedID': 'StedID', 'count': 'count', 'min': 'min', 'max': 'max', 'range': 'range', 'mean': 'mean', 'median': 'median', 'media': 'media', 'name': 'Navn', });
lyr_DNmlesteder_2.set('fieldAliases', {'fid': 'fid', 'ID number': 'ID number', 'Name': 'Navn', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'min': 'min', 'max': 'max', 'media': 'media', });
lyr_SGAVmlesteder_1.set('fieldImages', {'fid': 'Hidden', 'StedID': 'Hidden', 'count': 'Hidden', 'min': 'TextEdit', 'max': 'Hidden', 'range': 'Hidden', 'mean': 'Hidden', 'median': 'Hidden', 'media': 'ExternalResource', 'name': 'TextEdit', });
lyr_DNmlesteder_2.set('fieldImages', {'fid': 'Hidden', 'ID number': 'Hidden', 'Name': 'TextEdit', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'min': 'TextEdit', 'max': 'Hidden', 'media': 'ExternalResource', });
lyr_SGAVmlesteder_1.set('fieldLabels', {'min': 'hidden field', 'media': 'no label', 'name': 'hidden field', });
lyr_DNmlesteder_2.set('fieldLabels', {'Name': 'hidden field', 'min': 'hidden field', 'media': 'no label', });
lyr_DNmlesteder_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});