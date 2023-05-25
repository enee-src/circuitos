var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_CircuitosMT_2 = new ol.format.GeoJSON();
var features_CircuitosMT_2 = format_CircuitosMT_2.readFeatures(json_CircuitosMT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitosMT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitosMT_2.addFeatures(features_CircuitosMT_2);
var lyr_CircuitosMT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CircuitosMT_2, 
                style: style_CircuitosMT_2,
                interactive: true,
                title: '<img src="styles/legend/CircuitosMT_2.png" /> Circuitos MT'
            });
var format_CircuitosBT_3 = new ol.format.GeoJSON();
var features_CircuitosBT_3 = format_CircuitosBT_3.readFeatures(json_CircuitosBT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitosBT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitosBT_3.addFeatures(features_CircuitosBT_3);
var lyr_CircuitosBT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CircuitosBT_3,
maxResolution:1.4002233076130983,
 
                style: style_CircuitosBT_3,
                interactive: true,
                title: '<img src="styles/legend/CircuitosBT_3.png" /> Circuitos BT'
            });
var format_PostesMT_4 = new ol.format.GeoJSON();
var features_PostesMT_4 = format_PostesMT_4.readFeatures(json_PostesMT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesMT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesMT_4.addFeatures(features_PostesMT_4);cluster_PostesMT_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PostesMT_4
});
var lyr_PostesMT_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PostesMT_4,
maxResolution:2.8004466152261966,
 
                style: style_PostesMT_4,
                interactive: true,
                title: '<img src="styles/legend/PostesMT_4.png" /> Postes MT'
            });
var format_PostesBT_5 = new ol.format.GeoJSON();
var features_PostesBT_5 = format_PostesBT_5.readFeatures(json_PostesBT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesBT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesBT_5.addFeatures(features_PostesBT_5);cluster_PostesBT_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PostesBT_5
});
var lyr_PostesBT_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PostesBT_5,
maxResolution:1.4002233076130983,
 
                style: style_PostesBT_5,
                interactive: true,
                title: '<img src="styles/legend/PostesBT_5.png" /> Postes BT'
            });
var format_Transformadores_6 = new ol.format.GeoJSON();
var features_Transformadores_6 = format_Transformadores_6.readFeatures(json_Transformadores_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transformadores_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transformadores_6.addFeatures(features_Transformadores_6);cluster_Transformadores_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Transformadores_6
});
var lyr_Transformadores_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Transformadores_6,
maxResolution:2.8004466152261966,
 
                style: style_Transformadores_6,
                interactive: true,
                title: '<img src="styles/legend/Transformadores_6.png" /> Transformadores'
            });
var format_CircuitosMT_7 = new ol.format.GeoJSON();
var features_CircuitosMT_7 = format_CircuitosMT_7.readFeatures(json_CircuitosMT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitosMT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitosMT_7.addFeatures(features_CircuitosMT_7);
var lyr_CircuitosMT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CircuitosMT_7, 
                style: style_CircuitosMT_7,
                interactive: true,
                title: '<img src="styles/legend/CircuitosMT_7.png" /> Circuitos MT'
            });
var format_CircuitosBT_8 = new ol.format.GeoJSON();
var features_CircuitosBT_8 = format_CircuitosBT_8.readFeatures(json_CircuitosBT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitosBT_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitosBT_8.addFeatures(features_CircuitosBT_8);
var lyr_CircuitosBT_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CircuitosBT_8,
maxResolution:1.4002233076130983,
 
                style: style_CircuitosBT_8,
                interactive: true,
                title: '<img src="styles/legend/CircuitosBT_8.png" /> Circuitos BT'
            });
var format_PostesMT_9 = new ol.format.GeoJSON();
var features_PostesMT_9 = format_PostesMT_9.readFeatures(json_PostesMT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesMT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesMT_9.addFeatures(features_PostesMT_9);cluster_PostesMT_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PostesMT_9
});
var lyr_PostesMT_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PostesMT_9,
maxResolution:2.8004466152261966,
 
                style: style_PostesMT_9,
                interactive: true,
                title: '<img src="styles/legend/PostesMT_9.png" /> Postes MT'
            });
var format_PostesBT_10 = new ol.format.GeoJSON();
var features_PostesBT_10 = format_PostesBT_10.readFeatures(json_PostesBT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesBT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesBT_10.addFeatures(features_PostesBT_10);cluster_PostesBT_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PostesBT_10
});
var lyr_PostesBT_10 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PostesBT_10,
maxResolution:1.4002233076130983,
 
                style: style_PostesBT_10,
                interactive: true,
                title: '<img src="styles/legend/PostesBT_10.png" /> Postes BT'
            });
var format_Transformadores_11 = new ol.format.GeoJSON();
var features_Transformadores_11 = format_Transformadores_11.readFeatures(json_Transformadores_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transformadores_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transformadores_11.addFeatures(features_Transformadores_11);cluster_Transformadores_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Transformadores_11
});
var lyr_Transformadores_11 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Transformadores_11,
maxResolution:2.8004466152261966,
 
                style: style_Transformadores_11,
                interactive: true,
                title: '<img src="styles/legend/Transformadores_11.png" /> Transformadores'
            });
var format_CircuitosMT_12 = new ol.format.GeoJSON();
var features_CircuitosMT_12 = format_CircuitosMT_12.readFeatures(json_CircuitosMT_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitosMT_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitosMT_12.addFeatures(features_CircuitosMT_12);
var lyr_CircuitosMT_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CircuitosMT_12, 
                style: style_CircuitosMT_12,
                interactive: true,
                title: '<img src="styles/legend/CircuitosMT_12.png" /> Circuitos MT'
            });
var format_CircuitosBT_13 = new ol.format.GeoJSON();
var features_CircuitosBT_13 = format_CircuitosBT_13.readFeatures(json_CircuitosBT_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitosBT_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitosBT_13.addFeatures(features_CircuitosBT_13);
var lyr_CircuitosBT_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CircuitosBT_13,
maxResolution:1.4002233076130983,
 
                style: style_CircuitosBT_13,
                interactive: true,
                title: '<img src="styles/legend/CircuitosBT_13.png" /> Circuitos BT'
            });
var format_PostesMT_14 = new ol.format.GeoJSON();
var features_PostesMT_14 = format_PostesMT_14.readFeatures(json_PostesMT_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesMT_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesMT_14.addFeatures(features_PostesMT_14);cluster_PostesMT_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PostesMT_14
});
var lyr_PostesMT_14 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PostesMT_14,
maxResolution:2.8004466152261966,
 
                style: style_PostesMT_14,
                interactive: true,
                title: '<img src="styles/legend/PostesMT_14.png" /> Postes MT'
            });
var format_PostesBT_15 = new ol.format.GeoJSON();
var features_PostesBT_15 = format_PostesBT_15.readFeatures(json_PostesBT_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesBT_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesBT_15.addFeatures(features_PostesBT_15);cluster_PostesBT_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PostesBT_15
});
var lyr_PostesBT_15 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PostesBT_15,
maxResolution:1.4002233076130983,
 
                style: style_PostesBT_15,
                interactive: true,
                title: '<img src="styles/legend/PostesBT_15.png" /> Postes BT'
            });
var format_Transformadores_16 = new ol.format.GeoJSON();
var features_Transformadores_16 = format_Transformadores_16.readFeatures(json_Transformadores_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transformadores_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transformadores_16.addFeatures(features_Transformadores_16);cluster_Transformadores_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Transformadores_16
});
var lyr_Transformadores_16 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Transformadores_16,
maxResolution:2.8004466152261966,
 
                style: style_Transformadores_16,
                interactive: true,
                title: '<img src="styles/legend/Transformadores_16.png" /> Transformadores'
            });
var format_CircuitosMT_17 = new ol.format.GeoJSON();
var features_CircuitosMT_17 = format_CircuitosMT_17.readFeatures(json_CircuitosMT_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitosMT_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitosMT_17.addFeatures(features_CircuitosMT_17);
var lyr_CircuitosMT_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CircuitosMT_17, 
                style: style_CircuitosMT_17,
                interactive: true,
                title: '<img src="styles/legend/CircuitosMT_17.png" /> Circuitos MT'
            });
var format_CircuitosBT_18 = new ol.format.GeoJSON();
var features_CircuitosBT_18 = format_CircuitosBT_18.readFeatures(json_CircuitosBT_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitosBT_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitosBT_18.addFeatures(features_CircuitosBT_18);
var lyr_CircuitosBT_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CircuitosBT_18,
maxResolution:1.4002233076130983,
 
                style: style_CircuitosBT_18,
                interactive: true,
                title: '<img src="styles/legend/CircuitosBT_18.png" /> Circuitos BT'
            });
var format_PostesMT_19 = new ol.format.GeoJSON();
var features_PostesMT_19 = format_PostesMT_19.readFeatures(json_PostesMT_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesMT_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesMT_19.addFeatures(features_PostesMT_19);cluster_PostesMT_19 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PostesMT_19
});
var lyr_PostesMT_19 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PostesMT_19,
maxResolution:2.8004466152261966,
 
                style: style_PostesMT_19,
                interactive: true,
                title: '<img src="styles/legend/PostesMT_19.png" /> Postes MT'
            });
var format_PostesBT_20 = new ol.format.GeoJSON();
var features_PostesBT_20 = format_PostesBT_20.readFeatures(json_PostesBT_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostesBT_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesBT_20.addFeatures(features_PostesBT_20);cluster_PostesBT_20 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PostesBT_20
});
var lyr_PostesBT_20 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PostesBT_20,
maxResolution:1.4002233076130983,
 
                style: style_PostesBT_20,
                interactive: true,
                title: '<img src="styles/legend/PostesBT_20.png" /> Postes BT'
            });
var format_Transformadores_21 = new ol.format.GeoJSON();
var features_Transformadores_21 = format_Transformadores_21.readFeatures(json_Transformadores_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transformadores_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transformadores_21.addFeatures(features_Transformadores_21);cluster_Transformadores_21 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Transformadores_21
});
var lyr_Transformadores_21 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Transformadores_21,
maxResolution:2.8004466152261966,
 
                style: style_Transformadores_21,
                interactive: true,
                title: '<img src="styles/legend/Transformadores_21.png" /> Transformadores'
            });
var format_CLIENTES_22 = new ol.format.GeoJSON();
var features_CLIENTES_22 = format_CLIENTES_22.readFeatures(json_CLIENTES_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLIENTES_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLIENTES_22.addFeatures(features_CLIENTES_22);cluster_CLIENTES_22 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CLIENTES_22
});
var lyr_CLIENTES_22 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CLIENTES_22,
maxResolution:0.7001116538065492,
 
                style: style_CLIENTES_22,
                interactive: true,
                title: '<img src="styles/legend/CLIENTES_22.png" /> CLIENTES'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_CircuitosMT_2.setVisible(true);lyr_CircuitosBT_3.setVisible(true);lyr_PostesMT_4.setVisible(true);lyr_PostesBT_5.setVisible(true);lyr_Transformadores_6.setVisible(true);lyr_CircuitosMT_7.setVisible(true);lyr_CircuitosBT_8.setVisible(true);lyr_PostesMT_9.setVisible(true);lyr_PostesBT_10.setVisible(true);lyr_Transformadores_11.setVisible(true);lyr_CircuitosMT_12.setVisible(true);lyr_CircuitosBT_13.setVisible(true);lyr_PostesMT_14.setVisible(true);lyr_PostesBT_15.setVisible(true);lyr_Transformadores_16.setVisible(true);lyr_CircuitosMT_17.setVisible(true);lyr_CircuitosBT_18.setVisible(true);lyr_PostesMT_19.setVisible(true);lyr_PostesBT_20.setVisible(true);lyr_Transformadores_21.setVisible(true);lyr_CLIENTES_22.setVisible(true);

/** INICIA MODIFICACION 25/05/2023 */

var group_LFLL334 = new ol.layer.Group({
                                layers: [lyr_CircuitosMT_2,lyr_CircuitosBT_3,lyr_PostesMT_4,lyr_PostesBT_5,lyr_Transformadores_6,],
                                title: "LFL-L334",fold: 'close'});
								
var group_NISL331 = new ol.layer.Group({
                                layers: [lyr_CircuitosMT_7,lyr_CircuitosBT_8,lyr_PostesMT_9,lyr_PostesBT_10,lyr_Transformadores_11,],
                                title: "NIS-L331",fold: 'close'});
								
var group_ERA371 = new ol.layer.Group({
                                layers: [lyr_CircuitosMT_12,lyr_CircuitosBT_13,lyr_PostesMT_14,lyr_PostesBT_15,lyr_Transformadores_16,],
                                title: "ERA-L371",fold: 'close'});
								
var group_ERA372 = new ol.layer.Group({
                                layers: [lyr_CircuitosMT_17,lyr_CircuitosBT_18,lyr_PostesMT_19,lyr_PostesBT_20,lyr_Transformadores_21,],
                                title: "ERA-L372",fold: 'close'});

var layersList = [lyr_GoogleHybrid_0,lyr_GoogleMaps_1,group_LFLL334,group_NISL331,group_ERA371,group_ERA372],lyr_CLIENTES_22;

/**
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleMaps_1,lyr_CircuitosMT_2,lyr_CircuitosBT_3,lyr_PostesMT_4,lyr_PostesBT_5,lyr_Transformadores_6,lyr_CircuitosMT_7,lyr_CircuitosBT_8,lyr_PostesMT_9,lyr_PostesBT_10,lyr_Transformadores_11,lyr_CircuitosMT_12,lyr_CircuitosBT_13,lyr_PostesMT_14,lyr_PostesBT_15,lyr_Transformadores_16,lyr_CircuitosMT_17,lyr_CircuitosBT_18,lyr_PostesMT_19,lyr_PostesBT_20,lyr_Transformadores_21,lyr_CLIENTES_22];
*/

var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
	startActive: true,
    tipLabel: 'Show layer list',
    collapseTipLabel: 'Hide layer list',
    groupSelectStyle: 'children'});

/** FINALIZA MODIFICACION 25/05/2023 */

lyr_CircuitosMT_2.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_CircuitosBT_3.set('fieldAliases', {'ID_TRAMOBT': 'ID_TRAMOBT', 'CIRCUITO': 'CIRCUITO', 'ID_TRANSFORMADOR': 'ID_TRANSFORMADOR', 'VALORIZACION': 'VALORIZACION', 'VALORIZACION_AP': 'VALORIZACION_AP', 'VALORIZACION_N': 'VALORIZACION_N', });
lyr_PostesMT_4.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_PostesBT_5.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_Transformadores_6.set('fieldAliases', {'CODIGOTRAFODIS': 'CODIGOTRAFODIS', 'CODIGOAPOYO1': 'CODIGOAPOYO1', 'CIRCUITO': 'CIRCUITO', 'POTENCIA': 'POTENCIA', 'X': 'X', 'Y': 'Y', });
lyr_CircuitosMT_7.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_CircuitosBT_8.set('fieldAliases', {'ID_TRAMOBT': 'ID_TRAMOBT', 'CIRCUITO': 'CIRCUITO', 'ID_TRANSFORMADOR': 'ID_TRANSFORMADOR', 'VALORIZACION': 'VALORIZACION', 'VALORIZACION_AP': 'VALORIZACION_AP', 'VALORIZACION_N': 'VALORIZACION_N', });
lyr_PostesMT_9.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_PostesBT_10.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_Transformadores_11.set('fieldAliases', {'CODIGOTRAFODIS': 'CODIGOTRAFODIS', 'CODIGOAPOYO1': 'CODIGOAPOYO1', 'CIRCUITO': 'CIRCUITO', 'POTENCIA': 'POTENCIA', 'X': 'X', 'Y': 'Y', });
lyr_CircuitosMT_12.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_CircuitosBT_13.set('fieldAliases', {'ID_TRAMOBT': 'ID_TRAMOBT', 'CIRCUITO': 'CIRCUITO', 'ID_TRANSFORMADOR': 'ID_TRANSFORMADOR', 'VALORIZACION': 'VALORIZACION', 'VALORIZACION_AP': 'VALORIZACION_AP', 'VALORIZACION_N': 'VALORIZACION_N', });
lyr_PostesMT_14.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_PostesBT_15.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_Transformadores_16.set('fieldAliases', {'CODIGOTRAFODIS': 'CODIGOTRAFODIS', 'CODIGOAPOYO1': 'CODIGOAPOYO1', 'CIRCUITO': 'CIRCUITO', 'POTENCIA': 'POTENCIA', 'X': 'X', 'Y': 'Y', });
lyr_CircuitosMT_17.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_CircuitosBT_18.set('fieldAliases', {'ID_TRAMOBT': 'ID_TRAMOBT', 'CIRCUITO': 'CIRCUITO', 'ID_TRANSFORMADOR': 'ID_TRANSFORMADOR', 'VALORIZACION': 'VALORIZACION', 'VALORIZACION_AP': 'VALORIZACION_AP', 'VALORIZACION_N': 'VALORIZACION_N', });
lyr_PostesMT_19.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_PostesBT_20.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_Transformadores_21.set('fieldAliases', {'CODIGOTRAFODIS': 'CODIGOTRAFODIS', 'CODIGOAPOYO1': 'CODIGOAPOYO1', 'CIRCUITO': 'CIRCUITO', 'POTENCIA': 'POTENCIA', 'X': 'X', 'Y': 'Y', });
lyr_CLIENTES_22.set('fieldAliases', {'COSIGOCLIENTESGD': 'COSIGOCLIENTESGD', 'CLAVE': 'CLAVE', 'ID_TRANSFORMADOR': 'ID_TRANSFORMADOR', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'CODIGOCLIENTESGD': 'CODIGOCLIENTESGD', 'DEPARTAMENTO': 'DEPARTAMENTO', 'MUNICIPIO': 'MUNICIPIO', 'ALDEA': 'ALDEA', 'COLONIA': 'COLONIA', });
lyr_CircuitosMT_2.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_CircuitosBT_3.set('fieldImages', {'ID_TRAMOBT': 'Range', 'CIRCUITO': 'TextEdit', 'ID_TRANSFORMADOR': 'Range', 'VALORIZACION': 'TextEdit', 'VALORIZACION_AP': 'TextEdit', 'VALORIZACION_N': 'TextEdit', });
lyr_PostesMT_4.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_PostesBT_5.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_Transformadores_6.set('fieldImages', {'CODIGOTRAFODIS': 'Range', 'CODIGOAPOYO1': 'Range', 'CIRCUITO': 'TextEdit', 'POTENCIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CircuitosMT_7.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_CircuitosBT_8.set('fieldImages', {'ID_TRAMOBT': 'Range', 'CIRCUITO': 'TextEdit', 'ID_TRANSFORMADOR': 'Range', 'VALORIZACION': 'TextEdit', 'VALORIZACION_AP': 'TextEdit', 'VALORIZACION_N': 'TextEdit', });
lyr_PostesMT_9.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_PostesBT_10.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_Transformadores_11.set('fieldImages', {'CODIGOTRAFODIS': 'Range', 'CODIGOAPOYO1': 'Range', 'CIRCUITO': 'TextEdit', 'POTENCIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CircuitosMT_12.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_CircuitosBT_13.set('fieldImages', {'ID_TRAMOBT': 'Range', 'CIRCUITO': 'TextEdit', 'ID_TRANSFORMADOR': 'Range', 'VALORIZACION': 'TextEdit', 'VALORIZACION_AP': 'TextEdit', 'VALORIZACION_N': 'TextEdit', });
lyr_PostesMT_14.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_PostesBT_15.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_Transformadores_16.set('fieldImages', {'CODIGOTRAFODIS': 'Range', 'CODIGOAPOYO1': 'Range', 'CIRCUITO': 'TextEdit', 'POTENCIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CircuitosMT_17.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_CircuitosBT_18.set('fieldImages', {'ID_TRAMOBT': 'Range', 'CIRCUITO': 'TextEdit', 'ID_TRANSFORMADOR': 'Range', 'VALORIZACION': 'TextEdit', 'VALORIZACION_AP': 'TextEdit', 'VALORIZACION_N': 'TextEdit', });
lyr_PostesMT_19.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_PostesBT_20.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_Transformadores_21.set('fieldImages', {'CODIGOTRAFODIS': 'Range', 'CODIGOAPOYO1': 'Range', 'CIRCUITO': 'TextEdit', 'POTENCIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CLIENTES_22.set('fieldImages', {'COSIGOCLIENTESGD': '', 'CLAVE': 'Range', 'ID_TRANSFORMADOR': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'CODIGOCLIENTESGD': 'Range', 'DEPARTAMENTO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ALDEA': 'TextEdit', 'COLONIA': 'TextEdit', });
lyr_CircuitosMT_2.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_CircuitosBT_3.set('fieldLabels', {'ID_TRAMOBT': 'header label', 'CIRCUITO': 'inline label', 'ID_TRANSFORMADOR': 'inline label', 'VALORIZACION': 'inline label', 'VALORIZACION_AP': 'inline label', 'VALORIZACION_N': 'inline label', });
lyr_PostesMT_4.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_PostesBT_5.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_Transformadores_6.set('fieldLabels', {'CODIGOTRAFODIS': 'header label', 'CODIGOAPOYO1': 'inline label', 'CIRCUITO': 'inline label', 'POTENCIA': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_CircuitosMT_7.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_CircuitosBT_8.set('fieldLabels', {'ID_TRAMOBT': 'header label', 'CIRCUITO': 'inline label', 'ID_TRANSFORMADOR': 'inline label', 'VALORIZACION': 'inline label', 'VALORIZACION_AP': 'inline label', 'VALORIZACION_N': 'inline label', });
lyr_PostesMT_9.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_PostesBT_10.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_Transformadores_11.set('fieldLabels', {'CODIGOTRAFODIS': 'header label', 'CODIGOAPOYO1': 'inline label', 'CIRCUITO': 'inline label', 'POTENCIA': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_CircuitosMT_12.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_CircuitosBT_13.set('fieldLabels', {'ID_TRAMOBT': 'header label', 'CIRCUITO': 'inline label', 'ID_TRANSFORMADOR': 'inline label', 'VALORIZACION': 'inline label', 'VALORIZACION_AP': 'inline label', 'VALORIZACION_N': 'inline label', });
lyr_PostesMT_14.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_PostesBT_15.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_Transformadores_16.set('fieldLabels', {'CODIGOTRAFODIS': 'header label', 'CODIGOAPOYO1': 'inline label', 'CIRCUITO': 'inline label', 'POTENCIA': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_CircuitosMT_17.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_CircuitosBT_18.set('fieldLabels', {'ID_TRAMOBT': 'header label', 'CIRCUITO': 'inline label', 'ID_TRANSFORMADOR': 'inline label', 'VALORIZACION': 'inline label', 'VALORIZACION_AP': 'inline label', 'VALORIZACION_N': 'inline label', });
lyr_PostesMT_19.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_PostesBT_20.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_Transformadores_21.set('fieldLabels', {'CODIGOTRAFODIS': 'header label', 'CODIGOAPOYO1': 'inline label', 'CIRCUITO': 'inline label', 'POTENCIA': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_CLIENTES_22.set('fieldLabels', {'COSIGOCLIENTESGD': 'inline label', 'CLAVE': 'header label', 'ID_TRANSFORMADOR': 'inline label', 'COORD_X': 'no label', 'COORD_Y': 'no label', 'CIRCUITO': 'inline label', 'CODIGOCLIENTESGD': 'inline label', 'DEPARTAMENTO': 'inline label', 'MUNICIPIO': 'inline label', 'ALDEA': 'inline label', 'COLONIA': 'inline label', });
lyr_CLIENTES_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});