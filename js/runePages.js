/**
 * Created by Administrator on 2017/9/1.
 */
/*--创建数组--*/
var Arr= {
    "5001":{"h":'<li a="Red" b="5001" c="1"><img src="../images/runePages/r_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.53 攻击力</span></li>',"color":"Red","Level":"1","Price":"152","title":"初级攻击印记","data":"5"},
    "5002":{"h":'<li a="Red" b="5002" c="1"><img src="../images/runePages/r_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.08 攻击力(18级+1.35)</span></li>',"color":"Red","Level":"1","Price":"138","title":"初级攻击印记","data":"5"},
    "5003":{"h":'<li a="Red" b="5003" c="1"><img src="../images/runePages/r_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.94% 攻击速度</span></li>',"color":"Red","Level":"1","Price":"150","title":"初级攻速印记","data":"5"},
    "5005":{"h":'<li a="Red" b="5005" c="1"><img src="../images/runePages/r_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.24% 暴击伤害</span></li>',"color":"Red","Level":"1","Price":"144","title":"初级暴击印记","data":"1"},
    "5007":{"h":'<li a="Red" b="5007" c="1"><img src="../images/runePages/r_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.52% 暴击几率</span></li>',"color":"Red","Level":"1","Price":"124","title":"初级暴击印记","data":"1"},
    "5009":{"h":'<li a="Red" b="5009" c="1"><img src="../images/runePages/r_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.93 护甲穿透</span></li>',"color":"Red","Level":"1","Price":"144","title":"初级穿透印记","data":"1"},
    "5011":{"h":'<li a="Red" b="5011" c="1"><img src="../images/runePages/r_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.93 生命值</span></li>',"color":"Red","Level":"1","Price":"155","title":"初级生命印记","data":"3"},
    "5012":{"h":'<li a="Red" b="5012" c="1"><img src="../images/runePages/r_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.3 生命值 (18级+5.4)</span></li>',"color":"Red","Level":"1","Price":"150","title":"初级生命印记","data":"3"},
    "5013":{"h":'<li a="Red" b="5013" c="1"><img src="../images/runePages/r_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.51 护甲</span></li>',"color":"Red","Level":"1","Price":"160","title":"初级护甲印记","data":"2"},
    "5015":{"h":'<li a="Red" b="5015" c="1"><img src="../images/runePages/r_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.43 魔法抗性</span></li>',"color":"Red","Level":"1","Price":"180","title":"初级魔抗印记","data":"2"},
    "5016":{"h":'<li a="Red" b="5016" c="1"><img src="../images/runePages/r_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.04 魔法抗性 (18级+0.72)</span></li>',"color":"Red","Level":"1","Price":"165","title":"初级魔抗印记","data":"2"},
    "5021":{"h":'<li a="Red" b="5021" c="1"><img src="../images/runePages/r_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">-0.09% 冷却时间</span></li>',"color":"Red"," Level":"1","Price":"185","title":"初级冷却印记","data":"1"},
    "5023":{"h":'<li a="Red" b="5023" c="1"><img src="../images/runePages/r_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.33 法术强度</span></li>',"color":"Red","Level":"1","Price":"180","title":"初级法术印记","data":"4"},
    "5024":{"h":'<li a="Red" b="5024" c="1"><img src="../images/runePages/r_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.06 法术强度 (18级+1.08)</span></li>',"color":"Red","Level":"1","Price":"165","title":"初级法术印记","data":"4"},
    "5025":{"h":'<li a="Red" b="5025" c="1"><img src="../images/runePages/r_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+3.28 法力值</span></li>',"color":"Red","Level":"1","Price":"150","title":"初级法力印记","data":"4"},
    "5026":{"h":'<li a="Red" b="5026" c="1"><img src="../images/runePages/r_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.65 法力值 (18级+11.7)</span></li>',"color":"Red","Level":"1","Price":"130","title":"初级法力印记","data":"4"},
    "5027":{"h":'<li a="Red" b="5027" c="1"><img src="../images/runePages/r_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.15 法力回复/5秒</span></li>',"color":"Red","Level":"1","Price":"155","title":"初级回复印记","data":"4"},
    "5029":{"h":'<li a="Red" b="5029" c="1"><img src="../images/runePages/r_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.53 法术穿透</span></li>',"color":"Red","Level":"1","Price":"140","title":"初级法穿印记","data":"1"},
    "5911":{"h":'<li a="Red" b="5911" c="1"><img src="../images/runePages/r_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.56护甲穿透/+0.32法术穿透</span></li>',"color":"Red","Level":"115","Price":"140","title":"初级法穿印记","data":"1"},
    "5061":{"h":'<li a="Yellow" b="5061" c="1"><img src="../images/runePages/y_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.24 攻击力</span></li>',"color":"Yellow","Level":"1","Price":"145","title":"初级攻击符印","data":"5"},
    "5062":{"h":'<li a="Yellow" b="5062" c="1"><img src="../images/runePages/y_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.03 攻击力 (18级+0.61)</span></li>',"color":"Yellow","Level":"1","Price":"175","title":"初级攻击符印","data":"5"},
    "5063":{"h":'<li a="Yellow" b="5063" c="1"><img src="../images/runePages/y_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.42% 攻击速度</span></li>',"color":"Yellow","Level":"1","Price":"165","title":"初级攻速符印","data":"5"},
    "5065":{"h":'<li a="Yellow" b="5065" c="1"><img src="../images/runePages/y_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.43% 暴击伤害</span></li>',"color":"Yellow","Level":"1","Price":"185","title":"初级暴击符印","data":"1"},
    "5067":{"h":'<li a="Yellow" b="5067" c="1"><img src="../images/runePages/y_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.23% 暴击几率</span></li>',"color":"Yellow","Level":"1","Price":"175","title":"初级暴击符印","data":"1"},
    "5071":{"h":'<li a="Yellow" b="5071" c="1"><img src="../images/runePages/y_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+2.97 生命值</span></li>',"color":"Yellow","Level":"1","Price":"140","title":"初级生命符印","data":"3"},
    "5072":{"h":'<li a="Yellow" b="5072" c="1"><img src="../images/runePages/y_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.6 生命值 (18级+10.8)</span></li>',"color":"Yellow","Level":"1","Price":"140","title":"初级生命符印","data":"3"},
    "5073":{"h":'<li a="Yellow" b="5073" c="1"><img src="../images/runePages/y_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.78 护甲</span></li>',"color":"Yellow","Level":"1","Price":"140","title":"初级护甲符印","data":"2"},
    "5074":{"h":'<li a="Yellow" b="5074" c="1"><img src="../images/runePages/y_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.08 护甲(18级+1.44)</span></li>',"color":"Yellow","Level":"1","Price":"140","title":"初级护甲符印","data":"2"},
    "5075":{"h":'<li a="Yellow" b="5075" c="1"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.41 魔法抗性</span></li>',"color":"Yellow","Level":"1","Price":"158","title":"初级魔抗符印","data":"2"},
    "5076":{"h":'<li a="Yellow" b="5076" c="1"><img src="../images/runePages/y_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.05 魔法抗性 (18级+0.9)</span></li>',"color":"Yellow","Level":"1","Price":"140","title":"初级魔抗符印","data":"2"},
    "5077":{"h":'<li a="Yellow" b="5077" c="1"><img src="../images/runePages/y_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.24 生命回复/5秒</span></li>',"color":"Yellow","Level":"1","Price":"120","title":"初级回复符印","data":"3"},
    "5078":{"h":'<li a="Yellow" b="5078" c="1"><img src="../images/runePages/y_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.06 生命回复/5秒 (18级+1.08)</span></li>',"color":"Yellow","Level":"1","Price":"110","title":"初级回复符印","data":"3"},
    "5081":{"h":'<li a="Yellow" b="5081" c="1"><img src="../images/runePages/y_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">-0.2% 冷却时间</span></li>',"color":"Yellow","Level":"1","Price":"130","title":"初级冷却符印","data":"1"},
    "5083":{"h":'<li a="Yellow" b="5083" c="1"><img src="../images/runePages/y_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.33 法术强度</span></li>',"color":"Yellow","Level":"1","Price":"165","title":"初级法术符印","data":"4"},
    "5084":{"h":'<li a="Yellow" b="5084" c="1"><img src="../images/runePages/y_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.06 法术强度 (18级+1.08)</span></li>',"color":"Yellow","Level":"1","Price":"188","title":"初级法术符印","data":"4"},
    "5085":{"h":'<li a="Yellow" b="5085" c="1"><img src="../images/runePages/y_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+3.83 法力值</span></li>',"color":"Yellow","Level":"1","Price":"165","title":"初级法力符印","data":"4"},
    "5086":{"h":'<li a="Yellow" b="5086" c="1"><img src="../images/runePages/y_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.65 法力值 (18级+11.7)</span></li>',"color":"Yellow","Level":"1","Price":"185","title":"初级法力符印","data":"4"},
    "5087":{"h":'<li a="Yellow" b="5087" c="1"><img src="../images/runePages/y_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.23 法力回复/5秒 </span></li>',"color":"Yellow","Level":"1","Price":"175","title":"初级法力符印","data":"1"},
    "5088":{"h":'<li a="Yellow" b="5088" c="1"><img src="../images/runePages/y_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.036 法力回复/5秒(18级+0.65)</span></li>',"color":"Yellow","Level":"1","Price":"155","title":"初级法力符印","data":"1"},
    "5915":{"h":'<li a="Yellow" b="5915" c="1"><img src="../images/runePages/y_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.28%生命值加成</span></li>',"color":"Yellow","Level":"1","Price":"183","title":"初级生命符印","data":"3"},
    "5031":{"h":'<li a="Blue" b="5031" c="1"><img src="../images/runePages/b_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.16 攻击力</span></li>',"color":"Blue","Level":"1","Price":"152","title":"初级攻击雕纹","data":"5"},
    "5032":{"h":'<li a="Blue" b="5032" c="1"><img src="../images/runePages/b_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.02 攻击力 (18级+0.36)</span></li>',"color":"Blue","Level":"1","Price":"166","title":"初级攻击雕纹","data":"5"},
    "5033":{"h":'<li a="Blue" b="5033" c="1"><img src="../images/runePages/b_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.35% 攻击速度</span></li>',"color":"Blue","Level":"1","Price":"150","title":"初级攻击雕纹","data":"1"},
    "5035":{"h":'<li a="Blue" b="5035" c="1"><img src="../images/runePages/b_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.31% 暴击伤害</span></li>',"color":"Blue","Level":"1","Price":"180","title":"初级暴击雕纹","data":"5"},
    "5037":{"h":'<li a="Blue" b="5037" c="1"><img src="../images/runePages/b_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.15% 暴击几率</span></li>',"color":"Blue","Level":"1","Price":"182","title":"初级暴击雕纹","data":"5"},
    "5041":{"h":'<li a="Blue" b="5041" c="1"><img src="../images/runePages/b_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.49 生命值</span></li>',"color":"Blue","Level":"1","Price":"185","title":"初级生命雕纹","data":"3"},
    "5042":{"h":'<li a="Blue" b="5042" c="1"><img src="../images/runePages/b_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.3 生命值 (18级+5.4)</span></li>',"color":"Blue","Level":"1","Price":"140","title":"初级生命雕纹","data":"3"},
    "5043":{"h":'<li a="Blue" b="5043" c="1"><img src="../images/runePages/b_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.39 护甲</span></li>',"color":"Blue","Level":"1","Price":"147","title":"初级护甲雕纹","data":"2"},
    "5045":{"h":'<li a="Blue" b="5045" c="1"><img src="../images/runePages/b_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.74 魔法抗性</span></li>',"color":"Blue","Level":"1","Price":"155","title":"初级魔抗雕纹","data":"2"},
    "5046":{"h":'<li a="Blue" b="5046" c="1"><img src="../images/runePages/b_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.08 魔法抗性 (18级+1.44)</span></li>',"color":"Blue","Level":"1","Price":"155","title":"初级魔抗雕纹","data":"2"},
    "5047":{"h":'<li a="Blue" b="5047" c="1"><img src="../images/runePages/b_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.15 生命回复/5秒</span></li>',"color":"Blue","Level":"1","Price":"132","title":"初级回复雕纹","data":"2"},
    "5051":{"h":'<li a="Blue" b="5051" c="1"><img src="../images/runePages/b_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">-0.36% 冷却时间</span></li>',"color":"Blue","Level":"1","Price":"144","title":"初级冷却雕纹","data":"6"},
    "5052":{"h":'<li a="Blue" b="5052" c="1"><img src="../images/runePages/b_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级-0.03% 冷却时间 (-0.54%)</span></li>',"color":"Blue","Level":"1","Price":"155","title":"初级冷却雕纹","data":"6"},
    "5053":{"h":'<li a="Blue" b="5053" c="1"><img src="../images/runePages/b_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.66 法术强度</span></li>',"color":"Blue","Level":"1","Price":"177","title":"初级法术雕纹","data":"4"},
    "5054":{"h":'<li a="Blue" b="5054" c="1"><img src="../images/runePages/b_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.1 法术强度 (18级+1.8)</span></li>',"color":"Blue","Level":"1","Price":"145","title":"初级法术雕纹","data":"4"},
    "5055":{"h":'<li a="Blue" b="5055" c="1"><img src="../images/runePages/b_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+6.25 法力值</span></li>',"color":"Blue","Level":"1","Price":"155","title":"初级法术雕纹","data":"4"},
    "5056":{"h":'<li a="Blue" b="5056" c="1"><img src="../images/runePages/b_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.79 法力值 (18级+14.22)</span></li>',"color":"Blue","Level":"1","Price":"188","title":"初级法术雕纹","data":"4"},
    "5057":{"h":'<li a="Blue" b="5057" c="1"><img src="../images/runePages/b_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.17 法力回复/5秒</span></li>',"color":"Blue","Level":"1","Price":"140","title":"初级法术雕纹","data":"4"},
    "5058":{"h":'<li a="Blue" b="5058" c="1"><img src="../images/runePages/b_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.03 法力回复/5秒(18级+0.54)</span></li>',"color":"Blue","Level":"1","Price":"144","title":"初级法术雕纹","data":"4"},
    "5059":{"h":'<li a="Blue" b="5059" c="1"><img src="../images/runePages/b_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.38 法术穿透</span></li>',"color":"Blue","Level":"1","Price":"155","title":"初级法穿雕纹","data":"1"},
    "5091":{"h":'<li a="Purple" b="5091" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.25 攻击力</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级攻击精华","data":"5"},
    "5092":{"h":'<li a="Purple" b="5092" c="1"><img src="../images/runePages/bl_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.14 攻击力 (18级+2.52)</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级攻击精华","data":"5"},
    "5093":{"h":'<li a="Purple" b="5093" c="1"><img src="../images/runePages/bl_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.89% 攻击速度</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级攻击精华","data":"5"},
    "5095":{"h":'<li a="Purple" b="5095" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+2.48% 暴击伤害</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级暴击精华","data":"5"},
    "5097":{"h":'<li a="Purple" b="5097" c="1"><img src="../images/runePages/bl_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.03% 暴击几率</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级暴击精华","data":"5"},
    "5099":{"h":'<li a="Purple" b="5099" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.85点护甲穿透</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级护甲精华","data":"2"},
    "5101":{"h":'<li a="Purple" b="5101" c="1"><img src="../images/runePages/bl_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+14.5点生命值</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级生命精华","data":"3"},
    "5103":{"h":'<li a="Purple" b="5103" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+2.37 护甲</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级护甲精华","data":"2"},
    "5104":{"h":'<li a="Purple" b="5104" c="1"><img src="../images/runePages/bl_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.21 护甲 (18级+3.78)</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级护甲精华","data":"2"},
    "5105":{"h":'<li a="Purple" b="5105" c="1"><img src="../images/runePages/bl_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+2.22 魔法抗性</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级魔抗精华","data":"2"},
    "5106":{"h":'<li a="Purple" b="5106" c="1"><img src="../images/runePages/bl_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.21 魔法抗性 (18级+3.78)</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级魔抗精华","data":"2"},
    "5107":{"h":'<li a="Purple" b="5107" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.5 生命回复/5秒</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级回复精华","data":"3"},
    "5108":{"h":'<li a="Purple" b="5108" c="1"><img src="../images/runePages/bl_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.16 生命回复/5秒 (18级+2.88)</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级回复精华","data":"3"},
    "5111":{"h":'<li a="Purple" b="5111" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">-0.91% 冷却时间</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级冷却精华","data":"1"},
    "5112":{"h":'<li a="Purple" b="5112" c="1"><img src="../images/runePages/bl_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级-0.07% 冷却时间 (-1.26%)</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级冷却精华","data":"1"},
    "5113":{"h":'<li a="Purple" b="5113" c="1"><img src="../images/runePages/bl_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+2.75 法术强度</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级法术精华","data":"4"},
    "5114":{"h":'<li a="Purple" b="5114" c="1"><img src="../images/runePages/bl_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.24 法术强度 (18级+4.32)</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级法术精华","data":"4"},
    "5115":{"h":'<li a="Purple" b="5115" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+20.83 法力值</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级法力精华","data":"4"},
    "5116":{"h":'<li a="Purple" b="5116" c="1"><img src="../images/runePages/bl_2_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+2.31 法力值 (18级+41.58)</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级法力精华","data":"4"},
    "5117":{"h":'<li a="Purple" b="5117" c="1"><img src="../images/runePages/bl_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.69 法力回复/5秒 </span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级回复精华","data":"4"},
    "5118":{"h":'<li a="Purple" b="5118" c="1"><img src="../images/runePages/bl_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.14 法力回复/5秒  (18级+2.52)</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级回复精华","data":"4"},
    "5119":{"h":'<li a="Purple" b="5119" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.21 法术穿透</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级法穿精华","data":"1"},
    "5121":{"h":'<li a="Purple" b="5121" c="1"><img src="../images/runePages/bl_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.83% 移动速度</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级移动精华","data":"6"},
    "5910":{"h":'<li a="Purple" b="5910" c="1"><img src="../images/runePages/bl_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.11护甲穿透/+0.72法术穿透</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级穿透精华","data":"1"},
    "5912":{"h":'<li a="Purple" b="5912" c="1"><img src="../images/runePages/bl_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.12%法术生命偷取</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级生命精华","data":"3"},
    "5913":{"h":'<li a="Purple" b="5913" c="1"><img src="../images/runePages/bl_1_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.12%生命偷取</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级生命精华","data":"3"},
    "5914":{"h":'<li a="Purple" b="5914" c="1"><img src="../images/runePages/bl_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+0.84%生命值加成</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"初级生命精华","data":"3"},
    "5123":{"h":'<li a="Red" b="5123" c="2"><img src="../images/runePages/r_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.74 攻击力</span></li>',"color":"Red","Level":"2","Price":"352","title":"中级攻击印记","data":"5"},
    "5124":{"h":'<li a="Red" b="5124" c="2"><img src="../images/runePages/r_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.1 攻击力 (18级+1.89)</span></li>',"color":"Red","Level":"2","Price":"338","title":"中级攻击印记","data":"5"},
    "5125":{"h":'<li a="Red" b="5125" c="2"><img src="../images/runePages/r_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.32% 攻击速度</span></li>',"color":"Red","Level":"2","Price":"350","title":"中级攻速印记","data":"5"},
    "5127":{"h":'<li a="Red" b="5127" c="2"><img src="../images/runePages/r_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.74% 暴击伤害</span></li>',"color":"Red","Level":"2","Price":"344","title":"中级暴击印记","data":"5"},
    "5129":{"h":'<li a="Red" b="5129" c="2"><img src="../images/runePages/r_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.72% 暴击几率</span></li>',"color":"Red","Level":"2","Price":"324","title":"中级暴击印记","data":"5"},
    "5131":{"h":'<li a="Red" b="5131" c="2"><img src="../images/runePages/r_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.29 护甲穿透</span></li>',"color":"Red","Level":"2","Price":"344","title":"中级穿透印记","data":"1"},
    "5133":{"h":'<li a="Red" b="5133" c="2"><img src="../images/runePages/r_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+2.7 生命值</span></li>',"color":"Red","Level":"2","Price":"355","title":"中级生命印记","data":"3"},
    "5134":{"h":'<li a="Red" b="5134" c="2"><img src="../images/runePages/r_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.42 生命值 (18级+7.56)</span></li>',"color":"Red","Level":"2","Price":"350","title":"中级生命印记","data":"3"},
    "5135":{"h":'<li a="Red" b="5135" c="2"><img src="../images/runePages/r_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.71 护甲</span></li>',"color":"Red","Level":"2","Price":"360","title":"中级护甲印记","data":"2"},
    "5137":{"h":'<li a="Red" b="5137" c="2"><img src="../images/runePages/r_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.6 魔法抗性</span></li>',"color":"Red","Level":"2","Price":"380","title":"中级魔抗印记","data":"2"},
    "5138":{"h":'<li a="Red" b="5138" c="2"><img src="../images/runePages/r_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.06 魔法抗性 (18级+1.08)</span></li>',"color":"Red","Level":"2","Price":"365","title":"中级魔抗印记","data":"2"},
    "5143":{"h":'<li a="Red" b="5143" c="2"><img src="../images/runePages/r_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">-0.13% 冷却时间</span></li>',"color":"Red","Level":"2","Price":"385","title":"中级冷却印记","data":"1"},
    "5145":{"h":'<li a="Red" b="5145" c="2"><img src="../images/runePages/r_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.46 法术强度</span></li>',"color":"Red","Level":"2","Price":"380","title":"中级法术印记","data":"4"},
    "5146":{"h":'<li a="Red" b="5146" c="2"><img src="../images/runePages/r_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.08 法术强度 (18级+1.44)</span></li>',"color":"Red","Level":"2","Price":"365","title":"中级法术印记","data":"4"},
    "5147":{"h":'<li a="Red" b="5147" c="2"><img src="../images/runePages/r_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+4.59 法力值</span></li>',"color":"Red","Level":"2","Price":"350","title":"中级法力印记","data":"4"},
    "5148":{"h":'<li a="Red" b="5148" c="2"><img src="../images/runePages/r_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.91 法力值 (18级+16.38)</span></li>',"color":"Red","Level":"2","Price":"330","title":"中级法力印记","data":"4"},
    "5149":{"h":'<li a="Red" b="5149" c="2"><img src="../images/runePages/r_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.2 法力回复/5秒 </span></li>',"color":"Red","Level":"2","Price":"355","title":"中级回复印记","data":"4"},
    "5151":{"h":'<li a="Red" b="5151" c="2"><img src="../images/runePages/r_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.74 法术穿透</span></li>',"color":"Red","Level":"2","Price":"340","title":"中级法穿印记","data":"1"},
    "5921":{"h":'<li a="Red" b="5921" c="2"><img src="../images/runePages/r_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.74护甲穿透/+0.44法术穿透</span></li>',"color":"Red","Level":"2","Price":"340","title":"中级法穿印记","data":"1"},
    "5183":{"h":'<li a="Yellow" b="5183" c="2"><img src="../images/runePages/y_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.33 攻击力</span></li>',"color":"Yellow","Level":"2","Price":"345","title":"中级攻击符印","data":"5"},
    "5184":{"h":'<li a="Yellow" b="5184" c="2"><img src="../images/runePages/y_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.05 攻击力 (18级+0.85)</span></li>',"color":"Yellow","Level":"2","Price":"375","title":"中级攻击符印","data":"5"},
    "5185":{"h":'<li a="Yellow" b="5185" c="2"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.59% 攻击速度</span></li>',"color":"Yellow","Level":"2","Price":"365","title":"中级攻速符印","data":"5"},
    "5187":{"h":'<li a="Yellow" b="5187" c="2"><img src="../images/runePages/y_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.61% 暴击伤害</span></li>',"color":"Yellow","Level":"2","Price":"385","title":"中级暴击符印","data":"5"},
    "5189":{"h":'<li a="Yellow" b="5189" c="2"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.32% 暴击几率</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级暴击符印","data":"5"},
    "5193":{"h":'<li a="Yellow" b="5193" c="2"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+4.16 生命值</span></li>',"color":"Yellow","Level":"2","Price":"340","title":"中级生命符印","data":"3"},
    "5194":{"h":'<li a="Yellow" b="5194" c="2"><img src="../images/runePages/y_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.84 生命值 (18级+15.12)</span></li>',"color":"Yellow","Level":"2","Price":"340","title":"中级生命符印","data":"3"},
    "5195":{"h":'<li a="Yellow" b="5195" c="2"><img src="../images/runePages/y_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.09 护甲</span></li>',"color":"Yellow","Level":"2","Price":"340","title":"中级护甲符印","data":"2"},
    "5196":{"h":'<li a="Yellow" b="5196" c="2"><img src="../images/runePages/y_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.12 护甲 (18级+2.16)</span></li>',"color":"Yellow","Level":"2","Price":"340","title":"中级护甲符印","data":"2"},
    "5197":{"h":'<li a="Yellow" b="5197" c="2"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.58 魔法抗性</span></li>',"color":"Yellow","Level":"2","Price":"358","title":"中级魔抗符印","data":"2"},
    "5198":{"h":'<li a="Yellow" b="5198" c="2"><img src="../images/runePages/y_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.08 魔法抗性 (18级+1.44)</span></li>',"color":"Yellow","Level":"2","Price":"340","title":"中级魔抗符印","data":"2"},
    "5199":{"h":'<li a="Yellow" b="5199" c="2"><img src="../images/runePages/y_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.34 生命回复/5秒</span></li>',"color":"Yellow","Level":"2","Price":"320","title":"中级回复符印","data":"3"},
    "5200":{"h":'<li a="Yellow" b="5200" c="2"><img src="../images/runePages/y_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.09 生命回复/5秒 (18级+1.62)</span></li>',"color":"Yellow","Level":"2","Price":"310","title":"中级回复符印","data":"3"},
    "5203":{"h":'<li a="Yellow" b="5203" c="2"><img src="../images/runePages/y_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">-0.23% 冷却时间</span></li>',"color":"Yellow","Level":"2","Price":"330","title":"中级冷却符印","data":"1"},
    "5205":{"h":'<li a="Yellow" b="5205" c="2"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.46 法术强度</span></li>',"color":"Yellow","Level":"2","Price":"365","title":"中级法术符印","data":"4"},
    "5206":{"h":'<li a="Yellow" b="5206" c="2"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.08 法术强度 (18级+1.44)</span></li>',"color":"Yellow","Level":"2","Price":"388","title":"中级法术符印","data":"4"},
    "5207":{"h":'<li a="Yellow" b="5207" c="2"><img src="../images/runePages/y_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+5.36 法力值</span></li>',"color":"Yellow","Level":"2","Price":"365","title":"中级法力符印","data":"4"},
    "5208":{"h":'<li a="Yellow" b="5208" c="2"><img src="../images/runePages/y_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.91 法力值 (18级+16.38)</span></li>',"color":"Yellow","Level":"2","Price":"385","title":"中级法力符印","data":"4"},
    "5209":{"h":'<li a="Yellow" b="5209" c="2"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.32 法力回复/5秒 </span></li>',"color":"Yellow","Level":"2","Price":"375","title":"中级法力符印","data":"4"},
    "5210":{"h":'<li a="Yellow" b="5210" c="2"><img src="../images/runePages/y_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.05 法力回复/5秒(18级+0.9)</span></li>',"color":"Yellow","Level":"2","Price":"355","title":"中级法力符印","data":"4"},
    "5925":{"h":'<li a="Yellow" b="5925" c="2"><img src="../images/runePages/y_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.39%生命值加成</span></li>',"color":"Yellow","Level":"2","Price":"383","title":"中级生命符印","data":"3"},
    "5153":{"h":'<li a="Blue" b="5153" c="2"><img src="../images/runePages/b_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.22 攻击力</span></li>',"color":"Blue","Level":"2","Price":"352","title":"中级攻击雕纹","data":"5"},
    "5154":{"h":'<li a="Blue" b="5154" c="2"><img src="../images/runePages/b_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.03 攻击力 (18级+0.57)</span></li>',"color":"Blue","Level":"2","Price":"366","title":"中级攻击雕纹","data":"5"},
    "5155":{"h":'<li a="Blue" b="5155" c="2"><img src="../images/runePages/b_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.5% 攻击速度</span></li>',"color":"Blue","Level":"2","Price":"350","title":"中级攻击雕纹","data":"5"},
    "5157":{"h":'<li a="Blue" b="5157" c="2"><img src="../images/runePages/b_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.43% 暴击伤害</span></li>',"color":"Blue","Level":"2","Price":"380","title":"中级暴击雕纹","data":"5"},
    "5159":{"h":'<li a="Blue" b="5159" c="2"><img src="../images/runePages/b_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.22% 暴击几率</span></li>',"color":"Blue","Level":"2","Price":"382","title":"中级暴击雕纹","data":"5"},
    "5163":{"h":'<li a="Blue" b="5163" c="2"><img src="../images/runePages/b_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+2.08 生命值</span></li>',"color":"Blue","Level":"2","Price":"385","title":"中级生命雕纹","data":"3"},
    "5164":{"h":'<li a="Blue" b="5164" c="2"><img src="../images/runePages/b_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.42 生命值 (18级+7.56)</span></li>',"color":"Blue","Level":"2","Price":"340","title":"中级生命雕纹","data":"3"},
    "5165":{"h":'<li a="Blue" b="5165" c="2"><img src="../images/runePages/b_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.55 护甲</span></li>',"color":"Blue","Level":"2","Price":"347","title":"中级护甲雕纹","data":"2"},
    "5167":{"h":'<li a="Blue" b="5167" c="2"><img src="../images/runePages/b_3_1.png"><span style="width:200px;overflow:hidden;height:44px;">+1.04 魔法抗性</span></li>',"color":"Blue","Level":"2","Price":"355","title":"中级魔抗雕纹","data":"2"},
    "5168":{"h":'<li a="Blue" b="5168" c="2"><img src="../images/runePages/b_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.12 魔法抗性 (18级+2.16)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"中级魔抗雕纹","data":"2"},
    "5169":{"h":'<li a="Blue" b="5169" c="2"><img src="../images/runePages/b_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.21 生命回复/5秒</span></li>',"color":"Blue","Level":"2","Price":"332","title":"中级回复雕纹","data":"3"},
    "5173":{"h":'<li a="Blue" b="5173" c="2"><img src="../images/runePages/b_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">-0.51% 冷却时间</span></li>',"color":"Blue","Level":"2","Price":"344","title":"中级冷却雕纹","data":"1"},
    "5174":{"h":'<li a="Blue" b="5174" c="2"><img src="../images/runePages/b_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级-0.04% 冷却时间 (-0.72%)</span></li>',"color":"Blue","Level":"2","Price":"355","title":"中级冷却雕纹","data":"4"},
    "5175":{"h":'<li a="Blue" b="5175" c="2"><img src="../images/runePages/b_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.92 法术强度</span></li>',"color":"Blue","Level":"2","Price":"377","title":"中级法术雕纹","data":"4"},
    "5176":{"h":'<li a="Blue" b="5176" c="2"><img src="../images/runePages/b_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.13 法术强度 (18级+2.34)</span></li>',"color":"Blue","Level":"2","Price":"345","title":"中级法术雕纹","data":"4"},
    "5177":{"h":'<li a="Blue" b="5177" c="2"><img src="../images/runePages/b_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+8.75 法力值</span></li>',"color":"Blue","Level":"2","Price":"355","title":"中级法术雕纹","data":"4"},
    "5178":{"h":'<li a="Blue" b="5178" c="2"><img src="../images/runePages/b_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+1.1 法力值 (18级+19.8)</span></li>',"color":"Blue","Level":"2","Price":"388","title":"中级法术雕纹","data":"4"},
    "5179":{"h":'<li a="Blue" b="5179" c="2"><img src="../images/runePages/b_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.24 法力回复/5秒 </span></li>',"color":"Blue","Level":"2","Price":"340","title":"中级法术雕纹","data":"4"},
    "5180":{"h":'<li a="Blue" b="5180" c="2"><img src="../images/runePages/b_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.04 法力回复/5秒(18级+0.72)</span></li>',"color":"Blue","Level":"2","Price":"344","title":"中级法术雕纹","data":"4"},
    "5181":{"h":'<li a="Blue" b="5181" c="2"><img src="../images/runePages/b_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.53 法术穿透</span></li>',"color":"Blue","Level":"2","Price":"355","title":"中级法穿雕纹","data":"1"},
    "5213":{"h":'<li a="Purple" b="5213" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.75 攻击力</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级攻击精华","data":"5"},
    "5214":{"h":'<li a="Purple" b="5214" c="2"><img src="../images/runePages/bl_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.19 攻击力 (18级+3.42)</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级攻击精华","data":"5"},
    "5215":{"h":'<li a="Purple" b="5215" c="2"><img src="../images/runePages/bl_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+2.64% 攻击速度</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级攻击精华","data":"5"},
    "5217":{"h":'<li a="Purple" b="5217" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+3.47% 暴击伤害</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级暴击精华","data":"5"},
    "5219":{"h":'<li a="Purple" b="5219" c="2"><img src="../images/runePages/bl_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.44% 暴击几率</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级暴击精华","data":"5"},
    "5221":{"h":'<li a="Purple" b="5221" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+2.59 护甲穿透</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级护甲精华","data":"2"},
    "5223":{"h":'<li a="Purple" b="5223" c="2"><img src="../images/runePages/bl_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+20点生命值</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级生命精华","data":"3"},
    "5225":{"h":'<li a="Purple" b="5225" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+3.32 护甲</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级护甲精华","data":"2"},
    "5226":{"h":'<li a="Purple" b="5226" c="2"><img src="../images/runePages/bl_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.29 护甲 (18级+5.22)</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级护甲精华","data":"2"},
    "5227":{"h":'<li a="Purple" b="5227" c="2"><img src="../images/runePages/bl_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+3.11 魔法抗性</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级魔抗精华","data":"2"},
    "5228":{"h":'<li a="Purple" b="5228" c="2"><img src="../images/runePages/bl_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.29 魔法抗性 (18级+5.22)</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级魔抗精华","data":"2"},
    "5229":{"h":'<li a="Purple" b="5229" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+2.1 生命回复/5秒</span></li>',"color":"Purple","Level":"1","Price":"1055","title":"中级回复精华","data":"3"},
    "5230":{"h":'<li a="Purple" b="5230" c="2"><img src="../images/runePages/bl_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.22 生命回复/5秒 (18级+3.96)</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级回复精华","data":"3"},
    "5233":{"h":'<li a="Purple" b="5233" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">-1.27% 冷却时间</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级冷却精华","data":"1"},
    "5234":{"h":'<li a="Purple" b="5234" c="2"><img src="../images/runePages/bl_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级-0.1% 冷却时间 (-1.8%)</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级冷却精华","data":"1"},
    "5235":{"h":'<li a="Purple" b="5235" c="2"><img src="../images/runePages/bl_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+3.85 法术强度</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级法术精华","data":"4"},
    "5236":{"h":'<li a="Purple" b="5236" c="2"><img src="../images/runePages/bl_4_1.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.34 法术强度 (18级+6.12)</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级法术精华","data":"4"},
    "5237":{"h":'<li a="Purple" b="5237" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+29.17 法力值</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级法力精华","data":"4"},
    "5238":{"h":'<li a="Purple" b="5238" c="2"><img src="../images/runePages/bl_2_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+3.24 法力值 (18级+58.32)</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级法力精华","data":"4"},
    "5239":{"h":'<li a="Purple" b="5239" c="2"><img src="../images/runePages/bl_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+0.97 法力回复/5秒 </span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级回复精华","data":"4"},
    "5240":{"h":'<li a="Purple" b="5240" c="2"><img src="../images/runePages/bl_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.19 法力回复/5秒  (18级+3.42)</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级回复精华","data":"4"},
    "5241":{"h":'<li a="Purple" b="5241" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.69 法术穿透</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级法穿精华","data":"1"},
    "5243":{"h":'<li a="Purple" b="5243" c="2"><img src="../images/runePages/bl_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.17% 移动速度</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级移动精华","data":"6"},
    "5920":{"h":'<li a="Purple" b="5920" c="2"><img src="../images/runePages/bl_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.79护甲穿透/+1.4法术穿透</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级穿透精华","data":"1"},
    "5922":{"h":'<li a="Purple" b="5922" c="2"><img src="../images/runePages/bl_4_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.56%法术生命偷取</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级生命精华","data":"3"},
    "5923":{"h":'<li a="Purple" b="5923" c="2"><img src="../images/runePages/bl_1_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.56%生命偷取</span></li>',"color":"Purple","Level":"2","Price":"2055","title":"中级生命精华","data":"3"},
    "5924":{"h":'<li a="Purple" b="5924" c="2"><img src="../images/runePages/bl_3_2.png"><span style="width:200px;overflow:hidden;height:44px;">+1.5%生命值加成</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级生命精华","data":"3"},
    "5245":{"h":'<li a="Red" b="5245" c="3"><img src="../images/runePages/r_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.95 攻击力</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级攻击印记","data":"5"},
    "5246":{"h":'<li a="Red" b="5246" c="3"><img src="../images/runePages/r_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.13 攻击力(18级+2.43)</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级攻击印记","data":"5"},
    "5247":{"h":'<li a="Red" b="5247" c="3"><img src="../images/runePages/r_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.7% 攻击速度</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级攻击印记","data":"5"},
    "5249":{"h":'<li a="Red" b="5249" c="3"><img src="../images/runePages/r_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2.23% 暴击伤害</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级暴击印记","data":"5"},
    "5251":{"h":'<li a="Red" b="5251" c="3"><img src="../images/runePages/r_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.93% 暴击几率</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级暴击印记","data":"5"},
    "5253":{"h":'<li a="Red" b="5253" c="3"><img src="../images/runePages/r_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.60 护甲</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级护甲印记","data":"2"},
    "5255":{"h":'<li a="Red" b="5255" c="3"><img src="../images/runePages/r_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+3.47 生命值</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级护甲印记","data":"2"},
    "5256":{"h":'<li a="Red" b="5256" c="3"><img src="../images/runePages/r_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.54 生命值 (18级+9.72)</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级生命印记","data":"3"},
    "5257":{"h":'<li a="Red" b="5257" c="3"><img src="../images/runePages/r_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.91 护甲</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级护甲印记","data":"2"},
    "5259":{"h":'<li a="Red" b="5259" c="3"><img src="../images/runePages/r_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.77 魔法抗性</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级魔抗印记","data":"2"},
    "5260":{"h":'<li a="Red" b="5260" c="3"><img src="../images/runePages/r_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.07 魔法抗性 (18级+1.26)</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级魔抗印记","data":"2"},
    "5265":{"h":'<li a="Red" b="5265" c="3"><img src="../images/runePages/r_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">-0.2% 冷却时间</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级冷却印记","data":"1"},
    "5267":{"h":'<li a="Red" b="5267" c="3"><img src="../images/runePages/r_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.59 法术强度</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级法术印记","data":"4"},
    "5268":{"h":'<li a="Red" b="5268" c="3"><img src="../images/runePages/r_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.1 法术强度 (18级+1.8)</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级法术印记","data":"4"},
    "5269":{"h":'<li a="Red" b="5269" c="3"><img src="../images/runePages/r_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+5.91 法力值</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级法力印记","data":"4"},
    "5270":{"h":'<li a="Red" b="5270" c="3"><img src="../images/runePages/r_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+1.17 法力值 (18级+21.06)</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级法力印记","data":"4"},
    "5271":{"h":'<li a="Red" b="5271" c="3"><img src="../images/runePages/r_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.26 法力回复/5秒 </span></li>',"color":"Red","Level":"3","Price":"750","title":"高级法力印记","data":"4"},
    "5273":{"h":'<li a="Red" b="5273" c="3"><img src="../images/runePages/r_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.87 法术穿透</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级法穿印记","data":"1"},
    "5931":{"h":'<li a="Red" b="5931" c="3"><img src="../images/runePages/r_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.9护甲穿透/+0.62法术穿透</span></li>',"color":"Red","Level":"3","Price":"750","title":"高级穿透印记","data":"1"},
    "5305":{"h":'<li a="Yellow" b="5305" c="3"><img src="../images/runePages/y_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.43 攻击力</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级攻击符印","data":"5"},
    "5306":{"h":'<li a="Yellow" b="5306" c="3"><img src="../images/runePages/y_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.06 攻击力 (18级+1.09)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级攻击符印","data":"5"},
    "5307":{"h":'<li a="Yellow" b="5307" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.76% 攻击速度</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级攻速符印","data":"5"},
    "5309":{"h":'<li a="Yellow" b="5309" c="3"><img src="../images/runePages/y_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.78% 暴击伤害</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级暴击符印","data":"5"},
    "5311":{"h":'<li a="Yellow" b="5311" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.42% 暴击几率</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级暴击符印","data":"5"},
    "5315":{"h":'<li a="Yellow" b="5315" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+8 生命值</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级暴击符印","data":"5"},
    "5316":{"h":'<li a="Yellow" b="5316" c="3"><img src="../images/runePages/y_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+1.33 生命值 (18级+24)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级生命符印","data":"3"},
    "5317":{"h":'<li a="Yellow" b="5317" c="3"><img src="../images/runePages/y_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1 护甲</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级护甲符印","data":"2"},
    "5318":{"h":'<li a="Yellow" b="5318" c="3"><img src="../images/runePages/y_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.16 护甲 (18级+3)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级护甲符印","data":"2"},
    "5319":{"h":'<li a="Yellow" b="5319" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.74 魔法抗性</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级魔抗符印","data":"2"},
    "5320":{"h":'<li a="Yellow" b="5320" c="3"><img src="../images/runePages/y_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.1 魔法抗性 (18级+1.8)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级魔抗符印","data":"2"},
    "5321":{"h":'<li a="Yellow" b="5321" c="3"><img src="../images/runePages/y_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.56 生命回复/5秒</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级回复符印"},"data":"3",
    "5322":{"h":'<li a="Yellow" b="5322" c="3"><img src="../images/runePages/y_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.11 生命回复/5秒 (18级+1.98)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级回复符印","data":"3"},
    "5325":{"h":'<li a="Yellow" b="5325" c="3"><img src="../images/runePages/y_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">-0.36% 冷却时间</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级冷却符印","data":"4"},
    "5327":{"h":'<li a="Yellow" b="5327" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.59 法术强度</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级法术符印","data":"4"},
    "5328":{"h":'<li a="Yellow" b="5328" c="3"><img src="../images/runePages/y_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.1 法术强度 (18级+1.8)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级法术符印","data":"4"},
    "5329":{"h":'<li a="Yellow" b="5329" c="3"><img src="../images/runePages/y_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+6.89 法力值</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级法力符印","data":"4"},
    "5330":{"h":'<li a="Yellow" b="5330" c="3"><img src="../images/runePages/y_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+1.17 法力值 (18级+21.06)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级法力符印","data":"4"},
    "5331":{"h":'<li a="Yellow" b="5331" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.41 法力回复/5秒 </span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级法力符印","data":"4"},
    "5332":{"h":'<li a="Yellow" b="5332" c="3"><img src="../images/runePages/y_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.065 法力回复/5秒(18级+1.17)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级回复符印","data":"4"},
    "5369":{"h":'<li a="Yellow" b="5369" c="3"><img src="../images/runePages/y_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.63 能量回复/5秒</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级回复符印","data":"1"},
    "5370":{"h":'<li a="Yellow" b="5370" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.064 能量回复/5秒(18级+1.05)</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级回复符印","data":"1"},
    "5810":{"h":'<li a="Yellow" b="5810" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">每10秒获得0.25金钱</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级金钱符印","data":"6"},
    "5935":{"h":'<li a="Yellow" b="5935" c="3"><img src="../images/runePages/y_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.5%生命值加成</span></li>',"color":"Yellow","Level":"3","Price":"875","title":"高级生命符印","data":"3"},
    "5275":{"h":'<li a="Blue" b="5275" c="3"><img src="../images/runePages/b_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.28 攻击力</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级攻击雕纹","data":"5"},
    "5276":{"h":'<li a="Blue" b="5276" c="3"><img src="../images/runePages/b_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.04 攻击力 (18级+0.73)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级攻击雕纹","data":"5"},
    "5277":{"h":'<li a="Blue" b="5277" c="3"><img src="../images/runePages/b_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.64% 攻击速度</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级攻速雕纹","data":"5"},
    "5279":{"h":'<li a="Blue" b="5279" c="3"><img src="../images/runePages/b_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.56% 暴击伤害</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级暴击雕纹","data":"5"},
    "5281":{"h":'<li a="Blue" b="5281" c="3"><img src="../images/runePages/b_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.28% 暴击几率</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级暴击雕纹","data":"5"},
    "5285":{"h":'<li a="Blue" b="5285" c="3"><img src="../images/runePages/b_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2.67 生命值</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级生命雕纹","data":"3"},
    "5286":{"h":'<li a="Blue" b="5286" c="3"><img src="../images/runePages/b_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.54 生命值 (18级+9.72)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级生命雕纹","data":"3"},
    "5287":{"h":'<li a="Blue" b="5287" c="3"><img src="../images/runePages/b_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.7 护甲</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级护甲雕纹","data":"2"},
    "5289":{"h":'<li a="Blue" b="5289" c="3"><img src="../images/runePages/b_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.34 魔法抗性</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级魔抗雕纹","data":"2"},
    "5290":{"h":'<li a="Blue" b="5290" c="3"><img src="../images/runePages/b_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.16 魔法抗性 (18级+3)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级魔抗雕纹","data":"2"},
    "5291":{"h":'<li a="Blue" b="5291" c="3"><img src="../images/runePages/b_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.27 生命回复/5秒</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级回复雕纹","data":"3"},
    "5295":{"h":'<li a="Blue" b="5295" c="3"><img src="../images/runePages/b_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">-0.83% 冷却时间</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级冷却雕纹","data":"1"},
    "5296":{"h":'<li a="Blue" b="5296" c="3"><img src="../images/runePages/b_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级-0.09% 冷却时间 (-1.67%)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级冷却雕纹","data":"4"},
    "5297":{"h":'<li a="Blue" b="5297" c="3"><img src="../images/runePages/b_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.19 法术强度</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级法术雕纹","data":"4"},
    "5298":{"h":'<li a="Blue" b="5298" c="3"><img src="../images/runePages/b_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.17 法术强度 (18级+3.06)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级法术雕纹","data":"4"},
    "5299":{"h":'<li a="Blue" b="5299" c="3"><img src="../images/runePages/b_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+11.25 法力值</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级法力雕纹","data":"4"},
    "5300":{"h":'<li a="Blue" b="5300" c="3"><img src="../images/runePages/b_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+1.42 法力值 (18级+25.56)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级法力雕纹","data":"4"},
    "5301":{"h":'<li a="Blue" b="5301" c="3"><img src="../images/runePages/b_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.33 法力回复/5秒 </span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级法力雕纹","data":"4"},
    "5302":{"h":'<li a="Blue" b="5302" c="3"><img src="../images/runePages/b_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.06 法力回复/5秒(18级+1.2)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级回复雕纹","data":"4"},
    "5303":{"h":'<li a="Blue" b="5303" c="3"><img src="../images/runePages/b_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+0.63 法术穿透</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级法穿雕纹","data":"1"},
    "5371":{"h":'<li a="Blue" b="5371" c="3"><img src="../images/runePages/b_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2.2 能量</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级能量雕纹","data":"6"},
    "5372":{"h":'<li a="Blue" b="5372" c="3"><img src="../images/runePages/b_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.161 成长法术强度/级 (18级+2.89)</span></li>',"color":"Blue","Level":"3","Price":"805","title":"高级法术雕纹","data":"4"},
    "5335":{"h":'<li a="Purple" b="5335" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2.25 攻击力</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级攻击精华","data":"5"},
    "5336":{"h":'<li a="Purple" b="5336" c="3"><img src="../images/runePages/bl_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.25 攻击力 (18级+4.5)</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级攻击精华","data":"5"},
    "5337":{"h":'<li a="Purple" b="5337" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+4.5% 攻击速度</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级攻速精华","data":"5"},
    "5339":{"h":'<li a="Purple" b="5339" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+4.46% 暴击伤害</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级暴击精华","data":"5"},
    "5341":{"h":'<li a="Purple" b="5341" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.86% 暴击几率</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级暴击精华","data":"5"},
    "5343":{"h":'<li a="Purple" b="5343" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2.56点护甲穿透</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级穿甲精华","data":"1"},
    "5345":{"h":'<li a="Purple" b="5345" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+26点生命值</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级生命精华","data":"3"},
    "5347":{"h":'<li a="Purple" b="5347" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+4.26 护甲</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级护甲精华","data":"2"},
    "5348":{"h":'<li a="Purple" b="5348" c="3"><img src="../images/runePages/bl_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.38 护甲 (18级+6.84)</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级护甲精华","data":"2"},
    "5349":{"h":'<li a="Purple" b="5349" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+4 魔法抗性</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级魔抗精华","data":"2"},
    "5350":{"h":'<li a="Purple" b="5350" c="3"><img src="../images/runePages/bl_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.37 魔法抗性 (18级+6.66)</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级魔抗精华","data":"2"},
    "5351":{"h":'<li a="Purple" b="5351" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2.7 生命回复/5秒</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级回复精华","data":"3"},
    "5352":{"h":'<li a="Purple" b="5352" c="3"><img src="../images/runePages/bl_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.28 生命回复/5秒 (18级+5.04)</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级生命精华","data":"3"},
    "5355":{"h":'<li a="Purple" b="5355" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">-2.5% 冷却时间</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级冷却精华","data":"1"},
    "5356":{"h":'<li a="Purple" b="5356" c="3"><img src="../images/runePages/bl_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级-0.28% 冷却时间 (-5%)</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级冷却精华","data":"1"},
    "5357":{"h":'<li a="Purple" b="5357" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+4.95 法术强度</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级法术精华","data":"4"},
    "5358":{"h":'<li a="Purple" b="5358" c="3"><img src="../images/runePages/bl_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.43 法术强度 (18级+7.74)</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级法术精华","data":"4"},
    "5359":{"h":'<li a="Purple" b="5359" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+37.5 法力值</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级法力精华","data":"4"},
    "5360":{"h":'<li a="Purple" b="5360" c="3"><img src="../images/runePages/bl_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+4.17 法力值 (18级+75.06)</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级法力精华","data":"4"},
    "5361":{"h":'<li a="Purple" b="5361" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.25 法力回复/5秒 </span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级回复精华","data":"4"},
    "5362":{"h":'<li a="Purple" b="5362" c="3"><img src="../images/runePages/bl_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每级+0.24 法力回复/5秒  (18级+4.32)</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级回复精华","data":"4"},
    "5363":{"h":'<li a="Purple" b="5363" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2.01 法术穿透</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级法穿精华","data":"1"},
    "5365":{"h":'<li a="Purple" b="5365" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.5% 移动速度</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级移动精华","data":"6"},
    "5366":{"h":'<li a="Purple" b="5366" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">-5% 死亡时间</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级死亡精华","data":"6"},
    "5367":{"h":'<li a="Purple" b="5367" c="3"><img src="../images/runePages/bl_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">每10秒获得1金钱</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级金币精华","data":"6"},
    "5368":{"h":'<li a="Purple" b="5368" c="3"><img src="../images/runePages/bl_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2% 经验获得</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级经验精华","data":"6"},
    "5373":{"h":'<li a="Purple" b="5373" c="3"><img src="../images/runePages/bl_2_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.575 成长法术回复/5秒</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级法术精华","data":"4"},
    "5374":{"h":'<li a="Purple" b="5374" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+5.4 能量</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级能量精华","data":"6"},
    "5930":{"h":'<li a="Purple" b="5930" c="3"><img src="../images/runePages/bl_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.79护甲穿透/+1.4法术穿透</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级穿透精华","data":"1"},
    "5932":{"h":'<li a="Purple" b="5932" c="3"><img src="../images/runePages/bl_4_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2%法术吸血</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级吸血精华","data":"1"},
    "5933":{"h":'<li a="Purple" b="5933" c="3"><img src="../images/runePages/bl_1_3.png"><span style="width:200px;overflow:hidden;height:44px;">+1.5%生命偷取</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级生命精华","data":"1"},
    "5934":{"h":'<li a="Purple" b="5934" c="3"><img src="../images/runePages/bl_3_3.png"><span style="width:200px;overflow:hidden;height:44px;">+2%生命值加成</span></li>',"color":"Purple","Level":"3","Price":"3055","title":"高级生命精华","data":"3"}
};
/*等级框*/
var num=30;
$("#Level").hover(function () {
    $(this).children("dt").addClass("hover").next().css("display","block");
},function () {
    $(this).children("dt").removeClass("hover").next().css("display","none");
});
$("#Level>dd>ul>li").click(function () {
    $("#Level>dd>ul>li").removeClass("hover");
    $(this).addClass("hover");
    num= $(this).text();
    var txt="修改召唤师等级:"+num;
    $("#Level>dt>em").text(txt);
    if(num<=10){
        $("#ovs>li").removeClass("null");
        $("#ovs>li:not(:eq(0))").addClass("null");
        $("#ovs>li").removeClass("hover");
        $("#ovs>li:eq(0)").addClass("hover");
    }else if(num>10&&num<=20){
        $("#ovs>li").removeClass("null");
        $("#ovs>li:eq(2)").addClass("null");
        $("#ovs>li").removeClass("hover");
        $("#ovs>li:eq(1)").addClass("hover");
    }else{
        $("#ovs>li").removeClass("null");
        $("#ovs>li").removeClass("hover");
        $("#ovs>li:eq(2)").addClass("hover");
    }
    del();
    insert1();
});
/*--符文类型--*/
$(".RuneNav>li").click(function () {
    $(".RuneNav>li").removeClass("hover");
    $(this).addClass("hover");
    insert1();
});
/*--按等级--*/
$("#ovs>li").click(function () {
    if(!$(this).hasClass("null")){
        $("#ovs>li").removeClass("hover");
        $(this).addClass("hover");
    }
    insert1();
});
/*--按效果--*/
$("#effect>li").click(function () {
    $("#effect>li").removeClass("hover");
    $(this).addClass("hover");
    insert1();
});
/*--点击符文--*/
var numR=0;
var numY=0;
var numB=0;
var numP=0;
function add(t) {
    var a=$(t).attr("a");
    var b=$(t).attr("b");
    var c=$(t).attr("c");
    var d=$(t).find("span").text();
    var imgSrc=$(t).find("img").attr("src");
    var flag=0;
    var flagNumR;
    var flagNumY;
    var flagNumB;
    var flagNumP;
    if(num<10){
        flagNumP=0;
        if(num%3==1){
            flagNumR=parseInt(num/3)+1;
            flagNumY=parseInt(num/3);
            flagNumB=parseInt(num/3);
        }else if(num%3==2){
            flagNumR=parseInt(num/3)+1;
            flagNumY=parseInt(num/3)+1;
            flagNumB=parseInt(num/3);
        }else if(num%3==0){
            flagNumR=parseInt(num/3);
            flagNumY=parseInt(num/3);
            flagNumB=parseInt(num/3);
        }
    }else if(num>=10&&num<20){
        flagNumP=1;
        if((num-1)%3==1){
            flagNumR=parseInt((num-1)/3)+1;
            flagNumY=parseInt((num-1)/3);
            flagNumB=parseInt((num-1)/3);
        }else if((num-1)%3==2){
            flagNumR=parseInt((num-1)/3)+1;
            flagNumY=parseInt((num-1)/3)+1;
            flagNumB=parseInt((num-1)/3);
        }else if((num-1)%3==0){
            flagNumR=parseInt((num-1)/3);
            flagNumY=parseInt((num-1)/3);
            flagNumB=parseInt((num-1)/3);
        }
    }else if(num>=20&&num<30){
        flagNumP=2;
        if((num-2)%3==1){
            flagNumR=parseInt((num-2)/3)+1;
            flagNumY=parseInt((num-2)/3);
            flagNumB=parseInt((num-2)/3);
        }else if((num-2)%3==2){
            flagNumR=parseInt((num-2)/3)+1;
            flagNumY=parseInt((num-2)/3)+1;
            flagNumB=parseInt((num-2)/3);
        }else if((num-2)%3==0){
            flagNumR=parseInt((num-2)/3);
            flagNumY=parseInt((num-2)/3);
            flagNumB=parseInt((num-2)/3);
        }
    }else if(num==30){
        flagNumR=9;
        flagNumY=9;
        flagNumB=9;
        flagNumP=3;
    }
    if(a=="Red"){
        if(numR<flagNumR){
            $("#RuneData .Red li").each(function () {
                if($(this).html()==""){
                    flag++;
                    if(flag==1){
                        $(this).html("<img>");
                        $(this).find("img").attr({"src":imgSrc,"width":"50","height":"56","a":a,"b":b,"c":c,"d":d});
                        attrRune(t);
                        numR++;
                    }
                }
            });
        }
    }else if(a=="Yellow"){
        if(numY<flagNumY) {
            $("#RuneData .Yellow li").each(function () {
                if($(this).html()==""){
                    flag++;
                    if(flag==1){
                        $(this).html("<img>");
                        $(this).find("img").attr({"src":imgSrc,"width":"50","height":"56","a":a,"b":b,"c":c,"d":d});
                        attrRune(t);
                        numY++;
                    }
                }
            });
        }
    }else if(a=="Blue"){
        if(numB<flagNumB) {
            $("#RuneData .Blue li").each(function () {
                if($(this).html()==""){
                    flag++;
                    if(flag==1){
                        $(this).html("<img>");
                        $(this).find("img").attr({"src":imgSrc,"width":"50","height":"56","a":a,"b":b,"c":c,"d":d});
                        attrRune(t);
                        numB++;
                    }
                }
            });
        }
    }else if(a=="Purple"){
        if(numP<flagNumP) {
            $("#RuneData .Purple li").each(function () {
                if($(this).html()==""){
                    flag++;
                    if(flag==1){
                        $(this).html("<img>");
                        $(this).find("img").attr({"src":imgSrc,"width":"120","height":"121","a":a,"b":b,"c":c,"d":d});
                        attrRune(t);
                        numP++;
                        }
                }
            });
        }
    }
    total();
}
$("#RuneData li").click(function () {
    if($(this).html()!=""){
        var a=$(this).find("img").attr("a");
        if(a=="Red"){
            numR--;
        }else if(a=="Yellow"){
            numY--;
        }else if(a=="Blue"){
            numB--;
        }else if(a=="Purple"){
            numP--;
        }
        attrReDown(this);
        $(this).html("");
        total();
    }
});
/*-全部清空--*/
function del(){
    $("#RuneData li").html("");
    numR=0;
    numY=0;
    numB=0;
    numP=0;
    total();
    $("#Statistics").html("");
    flag1=[0];
    flag2=[0];
    flag3=[0];
    flag4=[0];
    flag5=[0];
    flag6=[0];
    flag7=[0];
    flag8=[0];
    flag9=[0];
    flag10=[0];
    flag11=[0];
    flag12=[0];
    flag13=[0];
    flag14=[0];
    flag15=[0];
    flag16=[0];
    flag17=[0];
    flag18=[0];
    flag19=[0];
    flag20=[0];
    flag21=[0];
    flag22=[0];
    flag23=[0];
    flag24=[0];
    flag1E=[0];
    flag6E=[0];
    flag7E=[0];
    flag13E=[0];
    flag14E=[0];
    flag15E=[0];
    flag16E=[0];
    flag17E=[0];
    flag19E=[0];
}
/*--经过符文时的提示框--*/
function mouseEn(th) {
    var i=$(th).index();
    var l=(i%4)*203+7+"px";
    var t=parseInt(i/4)*51+641+"px";
    var mySrc=$(th).find("img").attr("src");
    var myAttr=$(th).find("span").text();
    var b = $(th).attr("b")+"";
    var title=Arr[b]["title"];
    var IP="IP:"+Arr[b]["Price"];
    $(".HoverData").css({"display":"block","left":l,"top":t});
    $(".HoverData").find("img").attr("src",mySrc);
    $(".HoverData").find("p").text(myAttr);
    $(".HoverData").find("strong").text(title);
    $(".HoverData").find("span").text(IP);
}
function mouseOut() {
    $(".HoverData").css("display","none");
}
$("#RuneData li").hover(
    function () {
        if($(this).html()!="") {
            var conX = $("#content").offset().left;
            var conY = $("#content").offset().top;
            var x = $(this).offset().left;
            var y = $(this).offset().top;
            var h = $(this).height();
            var l = x - conX + "px";
            var t = y - conY + h + 8 + "px";
            var mySrc = $(this).find("img").attr("src");
            var b = $(this).find("img").attr("b")+"";
            var title=Arr[b]["title"];
            var IP="IP:"+Arr[b]["Price"];
            var myAttr = $(this).find("img").attr("d");
            $(".HoverData").css({"display": "block", "left": l, "top": t});
            $(".HoverData").find("img").attr("src", mySrc);
            $(".HoverData").find("p").text(myAttr);
            $(".HoverData").find("strong").text(title);
            $(".HoverData").find("span").text(IP);
        }
    },function () {
        $(".HoverData").css("display","none");
    });
/*--插入---*/
function insert(num1,names,num2) {
    $("#RuneListR1").html("");
    for(var key in Arr){
        if(Arr[key]["Level"]==num1&&Arr[key]["color"]==names){
            if(num2==0){
                $("#RuneListR1").append(Arr[key]["h"]);
            }else{
                if(Arr[key]["data"]==num2){
                    $("#RuneListR1").append(Arr[key]["h"]);
                }
            }

        }
    }
    $("#RuneListR1>li").click(function (){add(this);});
    $("#RuneListR1>li").hover(function () {
        mouseEn(this);
    },function () {
        mouseOut();
    });
}
$(function () {
    insert("3","Red","0");
});
/*插入符文的函数*/
function insert1() {
    var num1;
    var num2;
    var names;
    $("#effect>li").each(function () {
        if($(this).hasClass("hover")){
            num2=$(this).attr("data-v")+"";
        }
    });
    $("#ovs>li").each(function () {
        if($(this).hasClass("hover")){
            num1=$(this).attr("data-v")+"";
        }
    });
    $(".RuneNav>li").each(function () {
        if($(this).hasClass("hover")){
            names=$(this).attr("data-v")+"";
        }
    });
    insert(num1,names,num2);
}
/*--总价--*/
function total() {
    var price=0;
    $("#RuneData li").each(function () {
        if($(this).html()!=""){
            var b=$(this).find("img").attr("b")+"";
            price+=(Arr[b]["Price"]-0);
        }
    });
    $("#RuneIP").text(price);
}
/*--属性栏--*/
var flag1=[0];
var flag2=[0];
var flag3=[0];
var flag4=[0];
var flag5=[0];
var flag6=[0];
var flag7=[0];
var flag8=[0];
var flag9=[0];
var flag10=[0];
var flag11=[0];
var flag12=[0];
var flag13=[0];
var flag14=[0];
var flag15=[0];
var flag16=[0];
var flag17=[0];
var flag18=[0];
var flag19=[0];
var flag20=[0];
var flag21=[0];
var flag22=[0];
var flag23=[0];
var flag24=[0];
var flag1E=[0];
var flag6E=[0];
var flag7E=[0];
var flag13E=[0];
var flag14E=[0];
var flag15E=[0];
var flag16E=[0];
var flag17E=[0];
var flag19E=[0];
var attr0=/每级/;
var attr1=/攻击力/;
var attr2=/攻击速度/;
var attr3=/暴击伤害/;
var attr4=/暴击几率/;
var attr5=/生命值加成/;
var attr6=/生命值/;
var attr7=/生命回复/;
var attr8=/法术生命偷取/;
var attr9=/生命偷取/;
var attr10=/法术吸血/;
var attr11=/护甲穿透/;
var attr12=/护甲/;
var attr13=/魔法抗性/;
var attr14=/冷却时间/;
var attr15=/法力值/;
var attr16=/法力回复/;
var attr17=/法术强度/;
var attr18=/法术穿透/;
var attr19=/能量回复/;
var attr20=/能量/;
var attr21=/金钱/;
var attr22=/移动速度/;
var attr23=/经验获得/;
var attr24=/死亡时间/;
var attr25=/(护甲穿透)\S+(法术穿透)/;
var reg=/[0-9]+[\.]*[0-9]*/g;
function attrRune(t) {
    var attrR=$(t).find("span").text();
    var numR=attrR.match(reg);
    if(attr0.test(attrR)){
        attrRe(attr1,attrR,flag1E,"A1",numR[0]-0);
        attrRe(attr6,attrR,flag6E,"A5",numR[0]-0);
        attrRe(attr7,attrR,flag7E,"A7",numR[0]-0);
        attrRe(attr13,attrR,flag13E,"A13",numR[0]-0);
        attrRe(attr14,attrR,flag14E,"A14",numR[0]-0);
        attrRe(attr15,attrR,flag15E,"A15",numR[0]-0);
        attrRe(attr16,attrR,flag16E,"A16",numR[0]-0);
        attrRe(attr17,attrR,flag17E,"A17",numR[0]-0);
        attrRe(attr19,attrR,flag19E,"A20",numR[0]-0);
    }else{
        attrRe(attr1,attrR,flag1,"B1",numR[0]-0);
        attrRe(attr2,attrR,flag2,"B2",numR[0]-0);
        attrRe(attr3,attrR,flag3,"B3",numR[0]-0);
        attrRe(attr4,attrR,flag4,"B4",numR[0]-0);
        if(attr6.test(attrR)){
            if(attr5.test(attrR)){
                attrRe(attr5,attrR,flag5,"B5",numR[0]-0);
            }else{
                attrRe(attr6,attrR,flag6,"B6",numR[0]-0);
            }
        }
        attrRe(attr7,attrR,flag7,"B7",numR[0]-0);
        if(attr9.test(attrR)){
            if(attr8.test(attrR)){
                attrRe(attr8,attrR,flag8,"B8",numR[0]-0);
            }else{
                attrRe(attr9,attrR,flag9,"B9",numR[0]-0);
            }
        }
        attrRe(attr10,attrR,flag10,"B10",numR[0]-0);
        attrRe(attr13,attrR,flag13,"B13",numR[0]-0);
        attrRe(attr14,attrR,flag14,"B14",numR[0]-0);
        attrRe(attr15,attrR,flag15,"B15",numR[0]-0);
        attrRe(attr16,attrR,flag16,"B16",numR[0]-0);
        attrRe(attr17,attrR,flag17,"B17",numR[0]-0);
        if(attr20.test(attrR)){
            if(attr19.test(attrR)){
                attrRe(attr19,attrR,flag19,"B19",numR[0]-0);
            }else{
                attrRe(attr20,attrR,flag20,"B20",numR[0]-0);
            }
        }
        attrRe(attr21,attrR,flag21,"B21",numR[0]-0);
        attrRe(attr22,attrR,flag22,"B22",numR[0]-0);
        attrRe(attr23,attrR,flag23,"B23",numR[0]-0);
        attrRe(attr24,attrR,flag24,"B24",numR[0]-0);
        if(attr25.test(attrR)){
            attrRe(attr11,attrR,flag11,"B11",numR[0]-0);
            attrRe(attr18,attrR,flag18,"B18",numR[0]-0);
        }else{
            if(attr12.test(attrR)){
                if(attr11.test(attrR)){
                    attrRe(attr11,attrR,flag11,"B11",numR[0]-0);
                }else{
                    attrRe(attr12,attrR,flag12,"B12",numR[0]-0);
                }
                attrRe(attr18,attrR,flag18,"B18",numR[1]-0);
            }
        }
    }
}
/*封装的增加属性函数*/
function attrRe(attr,attrRu,flag,A,numr){
    if(attr.test(attrRu)){
        var names=attrRu.match(attr);
        names=names[0];
        var m=flag[0]++;
        var mei=/每级/;
        flag=[m];
        if(flag[0]==0){
            $("#Statistics").append("<li class="+A+"><em></em><span></span></li>");
            if(attr0.test(attrRu)){
                $("#Statistics").find('.'+A).find("em").text("18级"+names+":"+"+");
            }else{
                $("#Statistics").find('.'+A).find("em").text(names+":"+"+");
            }
            $("#Statistics").find('.'+A).find("span").text(numr);
            $("#Statistics").find('.'+A).css({"position":"relative","width":"100%","height":"24px","line-height":"24px","text-align":"left"})
        }else if(flag[0]>0){
            $("#Statistics li").each(
                function () {
                    if($(this).hasClass(A)){
                        $("#Statistics").find('.'+A).find("span").text((($("#Statistics").find('.'+A).find("span").text()-0)+numr).toFixed(2));
                    }
                }
            );
        }
    }
}
/*点击减小*/
function attrReDown(t) {
    var attrR= $(t).find("img").attr("d")+"";
    var numR=attrR.match(reg);
    if(attr0.test(attrR)){
        attrDown(attr1,attrR,flag1E,"A1",numR[0]-0);
        attrDown(attr6,attrR,flag6E,"A5",numR[0]-0);
        attrDown(attr7,attrR,flag7E,"A7",numR[0]-0);
        attrDown(attr13,attrR,flag13E,"A13",numR[0]-0);
        attrDown(attr14,attrR,flag14E,"A14",numR[0]-0);
        attrDown(attr15,attrR,flag15E,"A15",numR[0]-0);
        attrDown(attr16,attrR,flag16E,"A16",numR[0]-0);
        attrDown(attr17,attrR,flag17E,"A17",numR[0]-0);
        attrDown(attr19,attrR,flag19E,"A20",numR[0]-0);
    }else{
        attrDown(attr1,attrR,flag1,"B1",numR[0]-0);
        attrDown(attr2,attrR,flag2,"B2",numR[0]-0);
        attrDown(attr3,attrR,flag3,"B3",numR[0]-0);
        attrDown(attr4,attrR,flag4,"B4",numR[0]-0);
        if(attr6.test(attrR)){
            if(attr5.test(attrR)){
                attrDown(attr5,attrR,flag5,"B5",numR[0]-0);
            }else{
                attrDown(attr6,attrR,flag6,"B6",numR[0]-0);
            }
        }
        attrDown(attr7,attrR,flag7,"B7",numR[0]-0);
        if(attr9.test(attrR)){
            if(attr8.test(attrR)){
                attrDown(attr8,attrR,flag8,"B8",numR[0]-0);
            }else{
                attrDown(attr9,attrR,flag9,"B9",numR[0]-0);
            }
        }
        attrDown(attr10,attrR,flag10,"B10",numR[0]-0);
        attrDown(attr13,attrR,flag13,"B13",numR[0]-0);
        attrDown(attr14,attrR,flag14,"B14",numR[0]-0);
        attrDown(attr15,attrR,flag15,"B15",numR[0]-0);
        attrDown(attr16,attrR,flag16,"B16",numR[0]-0);
        attrDown(attr17,attrR,flag17,"B17",numR[0]-0);
        if(attr20.test(attrR)){
            if(attr19.test(attrR)){
                attrDown(attr19,attrR,flag19,"B19",numR[0]-0);
            }else{
                attrDown(attr20,attrR,flag20,"B20",numR[0]-0);
            }
        }
        attrDown(attr21,attrR,flag21,"B21",numR[0]-0);
        attrDown(attr22,attrR,flag22,"B22",numR[0]-0);
        attrDown(attr23,attrR,flag23,"B23",numR[0]-0);
        attrDown(attr24,attrR,flag24,"B24",numR[0]-0);
        if(attr25.test(attrR)){
            attrDown(attr11,attrR,flag11,"B11",numR[0]-0);
            attrDown(attr18,attrR,flag18,"B18",numR[0]-0);
        }else{
            if(attr12.test(attrR)){
                if(attr11.test(attrR)){
                    attrDown(attr11,attrR,flag11,"B11",numR[0]-0);
                }else{
                    attrDown(attr12,attrR,flag12,"B12",numR[0]-0);
                }
                attrDown(attr18,attrR,flag18,"B18",numR[1]-0);
            }
        }
    }
}
/*封装的减小函数*/
function attrDown(attr,attrRu,flag,A,numr){
    if(attr.test(attrRu)){
        var m=flag[0]--;
        flag=[m];
        if(flag[0]<=1){
            $("#Statistics").find('.'+A).remove();
        }else if(flag[0]>1){
            $("#Statistics li").each(
                function () {
                    if($(this).hasClass(A)){
                        $("#Statistics").find('.'+A).find("span").text((($("#Statistics").find('.'+A).find("span").text()-0)-numr).toFixed(2));
                    }
                }
            );
        }
    }
}
