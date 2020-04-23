var wms_layers = [];

var format_worldbordersTM_WORLD_BORDERS03_0 = new ol.format.GeoJSON();
var features_worldbordersTM_WORLD_BORDERS03_0 = format_worldbordersTM_WORLD_BORDERS03_0.readFeatures(json_worldbordersTM_WORLD_BORDERS03_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_worldbordersTM_WORLD_BORDERS03_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_worldbordersTM_WORLD_BORDERS03_0.addFeatures(features_worldbordersTM_WORLD_BORDERS03_0);
var lyr_worldbordersTM_WORLD_BORDERS03_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_worldbordersTM_WORLD_BORDERS03_0, 
                style: style_worldbordersTM_WORLD_BORDERS03_0,
                interactive: false,
                title: '<img src="styles/legend/worldbordersTM_WORLD_BORDERS03_0.png" /> world borders TM_WORLD_BORDERS-0.3'
            });
var format_Quartieriquartieri2001_1 = new ol.format.GeoJSON();
var features_Quartieriquartieri2001_1 = format_Quartieriquartieri2001_1.readFeatures(json_Quartieriquartieri2001_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartieriquartieri2001_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartieriquartieri2001_1.addFeatures(features_Quartieriquartieri2001_1);
var lyr_Quartieriquartieri2001_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Quartieriquartieri2001_1, 
                style: style_Quartieriquartieri2001_1,
                interactive: false,
                title: '<img src="styles/legend/Quartieriquartieri2001_1.png" /> Quartieri quartieri2001'
            });
var format_decumani_2 = new ol.format.GeoJSON();
var features_decumani_2 = format_decumani_2.readFeatures(json_decumani_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_decumani_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_decumani_2.addFeatures(features_decumani_2);
var lyr_decumani_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_decumani_2, 
                style: style_decumani_2,
                interactive: true,
                title: '<img src="styles/legend/decumani_2.png" /> decumani'
            });
var format_decumani_3 = new ol.format.GeoJSON();
var features_decumani_3 = format_decumani_3.readFeatures(json_decumani_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_decumani_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_decumani_3.addFeatures(features_decumani_3);
var lyr_decumani_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_decumani_3, 
                style: style_decumani_3,
                interactive: true,
                title: '<img src="styles/legend/decumani_3.png" /> decumani'
            });
var format_CHIESEINATTIVEPERGIS_4 = new ol.format.GeoJSON();
var features_CHIESEINATTIVEPERGIS_4 = format_CHIESEINATTIVEPERGIS_4.readFeatures(json_CHIESEINATTIVEPERGIS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHIESEINATTIVEPERGIS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHIESEINATTIVEPERGIS_4.addFeatures(features_CHIESEINATTIVEPERGIS_4);
var lyr_CHIESEINATTIVEPERGIS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHIESEINATTIVEPERGIS_4, 
                style: style_CHIESEINATTIVEPERGIS_4,
                interactive: true,
                title: '<img src="styles/legend/CHIESEINATTIVEPERGIS_4.png" /> CHIESE INATTIVE PER GIS'
            });

lyr_worldbordersTM_WORLD_BORDERS03_0.setVisible(true);lyr_Quartieriquartieri2001_1.setVisible(true);lyr_decumani_2.setVisible(true);lyr_decumani_3.setVisible(true);lyr_CHIESEINATTIVEPERGIS_4.setVisible(true);
var layersList = [lyr_worldbordersTM_WORLD_BORDERS03_0,lyr_Quartieriquartieri2001_1,lyr_decumani_2,lyr_decumani_3,lyr_CHIESEINATTIVEPERGIS_4];
lyr_worldbordersTM_WORLD_BORDERS03_0.set('fieldAliases', {'fips': 'fips', 'iso2': 'iso2', 'iso3': 'iso3', 'un': 'un', 'name': 'name', 'area': 'area', 'pop2005': 'pop2005', 'region': 'region', 'subregion': 'subregion', 'lon': 'lon', 'lat': 'lat', });
lyr_Quartieriquartieri2001_1.set('fieldAliases', {'AREA_': 'AREA_', 'PERIMETER_': 'PERIMETER_', 'QUART': 'QUART', 'MUN': 'MUN', });
lyr_decumani_2.set('fieldAliases', {'AREA_': 'AREA_', 'PERIMETER_': 'PERIMETER_', 'QUART': 'QUART', 'MUN': 'MUN', });
lyr_decumani_3.set('fieldAliases', {'ENTITY': 'ENTITY', 'LAYER': 'LAYER', 'THICKNESS': 'THICKNESS', 'ENTITY_2': 'ENTITY_2', 'LAYER_2': 'LAYER_2', 'THICKNESS_2': 'THICKNESS_2', });
lyr_CHIESEINATTIVEPERGIS_4.set('fieldAliases', {'n�': 'n�', 'NAME': 'NAME', 'NORD': 'NORD', 'EST': 'EST', 'ACTUAL FUNCTION': 'ACTUAL FUNCTION', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_worldbordersTM_WORLD_BORDERS03_0.set('fieldImages', {'fips': 'TextEdit', 'iso2': 'TextEdit', 'iso3': 'TextEdit', 'un': 'Range', 'name': 'TextEdit', 'area': 'Range', 'pop2005': 'TextEdit', 'region': 'Range', 'subregion': 'Range', 'lon': 'TextEdit', 'lat': 'TextEdit', });
lyr_Quartieriquartieri2001_1.set('fieldImages', {'AREA_': 'TextEdit', 'PERIMETER_': 'TextEdit', 'QUART': 'TextEdit', 'MUN': 'Range', });
lyr_decumani_2.set('fieldImages', {'AREA_': 'TextEdit', 'PERIMETER_': 'TextEdit', 'QUART': 'TextEdit', 'MUN': 'Range', });
lyr_decumani_3.set('fieldImages', {'ENTITY': 'TextEdit', 'LAYER': 'TextEdit', 'THICKNESS': 'TextEdit', 'ENTITY_2': 'TextEdit', 'LAYER_2': 'TextEdit', 'THICKNESS_2': 'TextEdit', });
lyr_CHIESEINATTIVEPERGIS_4.set('fieldImages', {'n�': 'Range', 'NAME': 'TextEdit', 'NORD': 'TextEdit', 'EST': 'TextEdit', 'ACTUAL FUNCTION': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_worldbordersTM_WORLD_BORDERS03_0.set('fieldLabels', {'fips': 'no label', 'iso2': 'no label', 'iso3': 'no label', 'un': 'no label', 'name': 'no label', 'area': 'no label', 'pop2005': 'no label', 'region': 'no label', 'subregion': 'no label', 'lon': 'no label', 'lat': 'no label', });
lyr_Quartieriquartieri2001_1.set('fieldLabels', {'AREA_': 'no label', 'PERIMETER_': 'no label', 'QUART': 'no label', 'MUN': 'no label', });
lyr_decumani_2.set('fieldLabels', {'AREA_': 'no label', 'PERIMETER_': 'no label', 'QUART': 'no label', 'MUN': 'no label', });
lyr_decumani_3.set('fieldLabels', {'ENTITY': 'no label', 'LAYER': 'no label', 'THICKNESS': 'no label', 'ENTITY_2': 'no label', 'LAYER_2': 'no label', 'THICKNESS_2': 'no label', });
lyr_CHIESEINATTIVEPERGIS_4.set('fieldLabels', {'n�': 'inline label', 'NAME': 'inline label', 'NORD': 'inline label', 'EST': 'inline label', 'ACTUAL FUNCTION': 'inline label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', });
lyr_CHIESEINATTIVEPERGIS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});