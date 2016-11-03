function MyMultiSelect($curEle){
   this.init($curEle);

}
MyMultiSelect.prototype={
    constructor:MyMultiSelect,
    init:function($curEle){
        this.isShowSelect($curEle);
        this.ChangeSelect($curEle);
    },
    isShowSelect:function bindShowSelect($curEle){
        var _this=this;
        $('.select_version input',$curEle).on('click',function(e){
            if($('.AndroidVer',$curEle).css('display')=='none'){
                $('.AndroidVer',$curEle).css('display','block');
            }else{
                $('.AndroidVer',$curEle).css('display','none');
            }
            _this.mystopPropagation(e);
        })
    },
    ChangeSelect:function bindSelectVer($curEle){
        $('.AndroidVer',$curEle).on('change',function(){

            // 版本选择下拉并且实现多选效果
            var str='';

            var dcount=$(".AndroidVer option",$curEle).length;
            if($(".AndroidVer option:selected",$curEle).length==dcount){
                $('.select_version input' ,$curEle).val($(".AndroidVer option",$curEle).eq(0).html());
                $('.select_version input',$curEle).css('width','100%');
                $(".AndroidVer",$curEle).css('width','100%');
            }
            else if($(".AndroidVer option:selected[value='1']",$curEle).length==1){

                $('.select_version input',$curEle).val($(".AndroidVer option",$curEle).eq(0).html())
                $('.select_version input',$curEle).css('width','100%');
                $(".AndroidVer",$curEle).css('width','100%');
            }
            else{
                $(".AndroidVer option:selected",$curEle).each(function(index,curEle){

                    if(this.value==1){
                        $('.select_version input',$curEle).val($(".AndroidVer option",$curEle).eq(0).html())
                        return;

                    }else{
                        str+=$(curEle).html()+',';
                    }

                });
                $('.select_version input',$curEle).val(str.substr(0,str.length-1));
                var SelectedCount=$(".AndroidVer option:selected",$curEle).length;
                if(SelectedCount==1){
                    $('.select_version input',$curEle).css('width','100%');
                    $(".AndroidVer",$curEle).css('width','100%');
                }else{
                    $('.select_version input',$curEle).css('width',90*SelectedCount)
                    $(".AndroidVer",$curEle).css('width',90*SelectedCount)
                }

            }
            //根据选择项的不同生成不同的图表
        })

    },
    mystopPropagation:function stopPropagation(e){
        var ev=e||window.event;
        if(ev.stopPropagation){
            ev.stopPropagation();
        }else{
            ev.cancelBubble=true;
        }
    }
}
$(function(){
    document.onclick = function(){
        $('.AndroidVer').css('display','none');

    }
})
