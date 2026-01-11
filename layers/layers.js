var wms_layers = [];


        var lyr_XYZ_0 = new ol.layer.Tile({
            'title': 'XYZ 图层',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=e5100ed9c1229dedc4593aa21237018b'
            })
        });
var format_admin_1 = new ol.format.GeoJSON();
var features_admin_1 = format_admin_1.readFeatures(json_admin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_1.addFeatures(features_admin_1);
var lyr_admin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_1, 
                style: style_admin_1,
                popuplayertitle: 'admin',
                interactive: true,
                title: '<img src="styles/legend/admin_1.png" /> admin'
            });
var format_green_2 = new ol.format.GeoJSON();
var features_green_2 = format_green_2.readFeatures(json_green_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_green_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_green_2.addFeatures(features_green_2);
var lyr_green_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_green_2, 
                style: style_green_2,
                popuplayertitle: 'green',
                interactive: true,
                title: '<img src="styles/legend/green_2.png" /> green'
            });
var format_grass_3 = new ol.format.GeoJSON();
var features_grass_3 = format_grass_3.readFeatures(json_grass_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grass_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grass_3.addFeatures(features_grass_3);
var lyr_grass_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_grass_3, 
                style: style_grass_3,
                popuplayertitle: 'grass',
                interactive: true,
                title: '<img src="styles/legend/grass_3.png" /> grass'
            });

lyr_XYZ_0.setVisible(true);lyr_admin_1.setVisible(true);lyr_green_2.setVisible(true);lyr_grass_3.setVisible(true);
var layersList = [lyr_XYZ_0,lyr_admin_1,lyr_green_2,lyr_grass_3];
lyr_admin_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'alt_name': 'alt_name', 'old_name': 'old_name', 'name_zh': 'name_zh', 'name_en': 'name_en', 'name': 'name', '面积': '面积', });
lyr_green_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'old_name': 'old_name', 'alt_name': 'alt_name', 'name_zh': 'name_zh', 'name_en': 'name_en', 'name': 'name', '面积': '面积', });
lyr_grass_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'landuse': 'landuse', 'name_zh': 'name_zh', 'name_en': 'name_en', 'name': 'name', '绿地面�': '绿地面�', });
lyr_admin_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'alt_name': 'TextEdit', 'old_name': 'TextEdit', 'name_zh': '', 'name_en': '', 'name': 'TextEdit', '面积': 'TextEdit', });
lyr_green_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'old_name': 'TextEdit', 'alt_name': 'TextEdit', 'name_zh': '', 'name_en': '', 'name': 'TextEdit', '面积': 'TextEdit', });
lyr_grass_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'landuse': 'TextEdit', 'name_zh': '', 'name_en': '', 'name': 'TextEdit', '绿地面�': '', });
lyr_admin_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'alt_name': 'no label', 'old_name': 'no label', 'name_zh': 'no label', 'name_en': 'no label', 'name': 'no label', '面积': 'header label - visible with data', });
lyr_green_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'old_name': 'no label', 'alt_name': 'no label', 'name_zh': 'no label', 'name_en': 'no label', 'name': 'no label', '面积': 'header label - visible with data', });
lyr_grass_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'landuse': 'no label', 'name_zh': 'no label', 'name_en': 'no label', 'name': 'no label', '绿地面�': 'header label - visible with data', });
lyr_grass_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});