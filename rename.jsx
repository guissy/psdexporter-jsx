function rename(){
        function changeLayerName(layer, index){    
        var layers = layer.layers;
        if(layers){
            var item = null;
            for(var i = 0; i < layers.length; i ++){
                var j = index - i;
                item = layers[i];
                if(item.visible==false){
                    item.name = 'hide';
                    changeLayerName(layers[i],index);
                    item.visible = false;
                    //item.remove();
                } else {
                    var name = item.name;
                    if(item.kind == LayerKind.SOLIDFILL) {
                        //形状图层，矢量，可能为按钮或背景图形
                        var bounds = item.bounds;
                        var x1 = parseInt(bounds[0]);
                        var y1 = parseInt(bounds[1]);
                        var x2 = parseInt(bounds[2]);
                        var y2 = parseInt(bounds[3]);
                        //假设为背景
                        if(y2-y1>40 && x2-x1>100 || y2-y1>100 && x2-x1>40 ) {
                            if(getColor(item).length>0){
                                //取得背景色
                                item.rasterize(RasterizeType.ENTIRELAYER);
                                item.name = "bg_"+j+".png"+getColor(item);    
                            } else{
                                //取不了背景色
                                item.name = "block_no_"+j;
                            }
                        } else if (y2-y1<3 || x2-x1<3 ) {
                            item.name = "line_"+j+getColor(item);
                        } else {
                            //图片
                            item.rasterize(RasterizeType.ENTIRELAYER);
                            item.name = "block_"+j+".png@"+'zlg';  
                        }
                    } else if(item.kind == LayerKind.TEXT){
                        item.name = "txt_"+j;
                    } else if(item.name == '图层 1'){
                        item.name = "*bg_"+j+getColor(item);
                    } else if(item.name.indexOf('矩形')==0){
                        item.rasterize(RasterizeType.ENTIRELAYER);
                        item.name = "shape_"+j+".gif";
                    } else {
                        item.name = "bg_"+j+"";
                    }
                    index-=100;
                    changeLayerName(layers[i],index);
                }
            }
        }
    }
    function getColor(item){
        if(item==null) return '';
        var bounds = item.bounds;
        var x1 = parseInt(bounds[0]);
        var y1 = parseInt(bounds[1]);
        var x2 = parseInt(bounds[2]);
        var y2 = parseInt(bounds[3]);
        var color = '';
        if(y2-y1>40 && x2-x1>100 || y2-y1>100 && x2-x1>40 ) {
            app.activeDocument.colorSamplers.removeAll(); 
            var x3=x1+(x2-x1)/2;
            var y3=y2-3;
            var pixelLoc = [UnitValue(x3 + " pixels") , UnitValue(y3 + " pixels")]; 
            var myColorSampler = app.activeDocument.colorSamplers.add(pixelLoc); 
            color = '#'+myColorSampler.color.rgb.hexValue;
        }
        return color;
    }
    changeLayerName(activeDocument,9999);
}
rename();