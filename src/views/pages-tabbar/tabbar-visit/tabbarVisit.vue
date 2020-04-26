<template>
  <div ref="tabbarVisit" class="tabbar-visit">
    <div class="header">
      <el-image fit="cover" :src="headerData.navImage[0]"></el-image>
    </div>
    <div class="content-item">
      <div class="left-rel">
        <div :style="fixed?`position: fixed;top:80px`:''" class="left" ref="contentItemLeft">
          <div :key="item.id" v-for="item in contentData" class="item">
            <el-button
              :style="{color:item.code===activeId?'#ff651a':''}"
              @click="changeItem(item.code)"
              class="item-title"
              type="text"
            >{{item.name}}</el-button>
          </div>
        </div>
      </div>
      <div class="right">
        <div :key="item.id" v-for="item in contentData">
          <div :id="item.code" class="title">{{item.name}}</div>
          <div v-html="item.content" class="content"></div>
        </div>
      </div>
    </div>
    <yuntai-back-top :showBtn="showBtn"></yuntai-back-top>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerData: {
        id: 4484,
        url: 'acquaintance.html',
        name: '初识云台',
        summary:
          '云台山是一处以太行山岳丰富的水景为特色，以峡谷类地质地貌景观和悠久的历史文化为内涵，集科学价值与美学价值于一身的科普生态旅游精品景区，因山势险峻，峰壑之间常年云锁雾绕而得名云台山。',
        content: '',
        code: 'csyt',
        travelTime: '集科学价值和美学价值与一身的科普生态旅游精品景区',
        level: 1,
        navImage: [
          'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495876197809/云台仙境美如画1111.jpg'
        ],
        channelImage: [
          'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495863258973/index2.jpg',
          'http://file.geeker.com.cn/hzcloud/web/zxw/content/1574048748018初识云台.jpg'
        ],
        exInfo: {
          address: '',
          hotline: '',
          videoIntro: ''
        }
      },
      contentData: [
        {
          id: 4490,
          url: 'profile-desc.html',
          name: '景区概况',
          summary:
            '云台山位于河南省焦作市修武县境内，距省会郑州70公里。景区总面积50平方公里，含红石峡、潭瀑峡、泉瀑峡、茱萸峰、凤凰岭、猕猴谷、子房湖、万善寺等八大景观区，是一处以太行山岳丰富的水景为特色，以峡谷类地质地貌景观和悠久的历史文化为内涵，集科学价值和美学价值于一身的科普生态旅游精品景区。',
          content:
            '<p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"></span></p><p style="text-align: justify; text-indent: 2em;"><br/></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 宋体, SimSun; font-size: 18px;"></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山位于河南省焦作市修武县境内，距省会郑州70公里。景区总面积50平方公里，含红石峡、潭瀑峡、泉瀑峡、茱萸峰、叠彩洞、猕猴谷、子房湖、万善寺等八大景点，是一处以太行山岳丰富的水景为特色，以峡谷类地质地貌景观和悠久的历史文化为内涵，集科学价值和美学价值与一身的科普生态旅游精品景区。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山是集全球首批世界地质公园、国家级风景名胜区、首批国家5A级旅游景区、国家自然遗产、国家森林公园、国家水利风景区、国家级猕猴自然保护区、国家文化产业示范基地等一个世界级、十个国家级称号于一身的风景名胜区。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山以山称奇，以水叫绝，因峰冠雄，因峡显幽，景色荟萃各不同。春来冰消雪融，万物复苏，小溪流水，山花烂漫，是春游赏花、放松休闲的好去处；夏日郁郁葱葱的原始次生林，丰富独特的飞瀑流泉，造就了云台山奇特壮美，如诗如画的山水景观，更是人们向往的旅游避暑胜地；秋季来临，层林尽染，红叶似火，登高山之巅，观云台秋色，插茱萸，赏红叶，遥寄情怀；冬季到来，大自然又把云台山装扮的银装素裹，冰清玉洁，但见群山<span style="text-align: justify; text-indent: 32px; font-family: 宋体, SimSun; font-size: 18px;">莽莽苍苍，雄浑奇劲，一派壮美苍茫的北国风光。</span></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 宋体, SimSun; font-size: 18px;"><br/></span></p><p style="text-align: center; line-height: 36px; text-indent: 0em;"><span style="font-family: 宋体, SimSun; font-size: 18px;"><img alt="038a157c6f974cfd9e618f3ecfd2c388.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572944356820/1572944356820/038a157c6f974cfd9e618f3ecfd2c388.jpg"/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;"></span></strong></span>&nbsp;</p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">山水养眼</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山以山称奇，因峰冠雄。茱萸峰是历代文人墨客，僧道修行的圣地，这里植被茂密，古树参天，森林植被覆盖率高达93%，植物种类达1400多种。踏千阶的云梯栈道，登上海拔1297.6米的茱萸峰顶，北望太行深处，巍巍群山，南望怀川平原，沃野千里，使人顿生“会当凌绝顶，一览众山小”的豪迈气慨。唐代大诗人王维曾登临此峰写下“独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人”的千古绝句。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山以水叫绝，因峡显幽。峡谷奇观红石峡，集秀、幽、雄、险于一身，融泉、瀑、溪、潭于一谷，外旷内幽，奇景深藏，素来享有“盆景峡谷”的美誉。太行秀水潭瀑峡，密布瀑、泉、溪、潭，流水跌宕声声，潭瀑相映成趣。泉瀑峡山雄水秀，峰高瀑急，落差314米的亚洲第一高瀑“云台天瀑”就位于泉瀑峡尽头，上吻蓝天，下蹈石坪，宛若银河飞落，犹如擎天玉柱，蔚为壮观。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">联合国教科文组织地学部主任伊德博士实地考察景区后感叹到：“我不得不承认，云台山是一个独一无二、不可比拟的地质公园。它给我的印象是一部乐章，是一首贝多芬的交响乐，是一首最美妙的山水交响乐。”</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="1fcfef08502649d7a91e2a9181efde56.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572944395976/1572944395976/1fcfef08502649d7a91e2a9181efde56.jpg"/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">文化养心</span></strong></span></p><p style="text-align: justify; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山不仅拥有秀美的山水自然景观，历史文化内涵也很丰富。从东汉起，云台山备受帝王将相、达官贵人垂青，并为魏晋名士所经营，道家所开发，南北朝以后逐渐由儒释道三教在此合流共处，世世代代为众多文人墨客、四方名流聚散地。地处茱萸峰极顶的玄帝宫，自古就流传着真武大帝在此修行成仙的民间故事，与南顶武当遥相呼应，被人称为“北顶”。始建于明代的万善寺位于茱萸峰翠屏峰脚下，是佛家教派临济宗祖庭。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img alt="云台山概况1 (2).jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1494914707282/1494914707282/云台山概况1 (2).jpg"/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">太极养气</span></strong></span></p><p style="text-align: justify; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">太极拳是我国著名的内家功夫名拳，发源于焦作温县陈家沟，三百多年来，经过世代相传，逐渐演化出杨式、吴式、孙式、武式等诸多流派，目前在全世界参练总人数达3亿多人，成为最受欢迎的世界第一运动。</span></p><p style="text-align: justify; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">陈式太极拳是东方文化的瑰宝，它的特点是以刚为主，刚中有柔，动作窜蹦跳跃、闪展腾挪，具有锻炼肌肉、舒经活络、调整呼吸、平心静气的作用，长期练习可强身健体、延年益寿，达到身心健康和谐发展。为向游客展示正宗的陈氏太极拳，云台山景区邀请曾多次卫冕国际太极拳的陈式太极拳嫡传弟子，每天在小寨沟景区内定时表演，柔中带刚、行云流水的太极拳表演吸引了众多游客的观看和赞赏。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="325ef05ee7654a5e8edb2ce1db1527a2.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572944440276/1572944440276/325ef05ee7654a5e8edb2ce1db1527a2.jpg"/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: left; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">医药养生</span></strong></span></p><p style="text-align: justify; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山草木丰茂、植被多样，生长着地黄、菊花、牛膝、山药、连翘等多种珍贵中草药，唐代大医药学家“药王”孙思邈曾在云台山一带活动，并留下“药王洞”遗址。以“怀山药、怀地黄、怀菊花、怀牛膝”为代表的四大怀药，是博大精深的中医药文化瑰宝，素以药材地道、疗效独特而号称“怀参”，早在春秋时代怀药就是向王侯进献的贡品。怀药不仅畅销国内，而且远销30多个国家和地区，早在明朝怀药就已出口东南亚，在国际市场上广受赞誉，日、美称其为“华药”。</span></p><p style="text-align: justify; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山地区特有的土壤与气候条件,造就了怀药独特的药性和极高的保健价值，并逐渐形成了独特的怀药药膳养生文化，包括蜂蜜山药、蜜汁鸡头参、牛膝炖土鸡、巧拌地黄丝、十足全虫、连翘茶等融合当地特色的云台山美食。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img alt="云台山概况1 (4).jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1494914727834/1494914727835/云台山概况1 (4).jpg"/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">民俗养性</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">在云台山景区内，分布着十几个大大小小的太行古村落，风貌原始、民风淳朴、风俗独特，是体验原始乡村旅游的好去处。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">座落在云台山深处的一斗水村已有400多年的历史，现存明、清时期民居数十间，依山而建、错落有致、别具韵味，吸引了众多驴友和民俗爱好者到此体验民俗民风。青龙峡内的双庙村、陪嫁妆村等独具特色的古山村，景色秀丽、环境清幽，书写了世外山乡的浓浓乡愁，是最适宜的乡村生态旅游休闲之所。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img alt="云台山概况1 (5).jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1494914748238/1494914748238/云台山概况1 (5).jpg"/></span></p><p><br/></p>',
          code: 'jqgk',
          travelTime: '',
          level: 2,
          navImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495874993083/p96-97横空出世.jpg'
          ],
          channelImage: [
            'http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1494901751850/1494901980735/36-云台晨曦.jpg'
          ],
          exInfo: {
            address: '',
            hotline: '',
            videoIntro: ''
          },
          recommedNews: []
        },
        {
          id: 4491,
          url: 'profile-desc.html',
          name: '地质地貌',
          summary:
            '云台山世界地质公园位于太行山脉最南端，中国地貌第二台阶与华北冲积平原的交接处。在地质构造方面，云台山地区位于中朝克拉通南缘，是华北克拉通上几个太古宙古陆核出露区之一，处于新生代东亚裂谷系渤海湾裂谷盆地的西缘，具有34亿年的岩石记录和漫长的地质发展历史，经历了太古宙－古元古代克拉通结晶基底形成时期，中新元古代拗拉槽发展阶段，古生代克拉通盖层形成时期，中新生代陆内造山、盆－山构造地貌演化时期等多个构造演化阶段。其中，寒武纪－中奥陶世稳定浅海陆台沉积、石炭纪－二叠纪海陆交互相含煤建造，从而形成了颇具特色的地质构造和地貌景观。',
          content:
            '<p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">地质构造</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山世界地质公园位于太行山脉最南端，中国地貌第二台阶与华北冲积平原的交接处。在地质构造方面，云台山地区位于中朝克拉通南缘，是华北克拉通上几个太古宙古陆核出露区之一，处于新生代东亚裂谷系渤海湾裂谷盆地的西缘，具有34亿年的岩石记录和漫长的地质发展历史，经历了太古宙－古元古代克拉通结晶基底形成时期，中新元古代拗拉槽发展阶段，古生代克拉通盖层形成时期，中新生代陆内造山、盆－山构造地貌演化时期等多个构造演化阶段。其中，寒武纪－中奥陶世稳定浅海陆台沉积、石炭纪－二叠纪海陆交互相含煤建造，从而形成了颇具特色的地质构造和地貌景观。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="地质地貌 (1).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914329680/地质地貌 (1).jpg"/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">其主要地质构造特征有：</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">褶皱构造</span></strong></span><strong><span style="font-family: 宋体, SimSun; font-size: 14px;">　</span></strong></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">褶皱构造主要形成于中生代的挤压造山阶段。这时的构造环境与美国西部弧后压缩区的情况十分类似，即是由岩石圈板块应力传递而形成的构造现象。由于基底块体压缩使上覆层产生“断褶隆起”。在隆起的顶部断裂发育，块体破碎，剥蚀严重。但由于基底硬化程度和盖层沉积厚度差异，特别是不同地点受力大小、方向的不同，变形特点因地而异。这次构造作用在太行山区发育了北北东向雁列褶皱带，华北裂谷带内主要形成了北东向的右行雁列轴北斜和大型向斜。总体而言，太行山区褶皱的发育强度由北向南有减弱的趋势，至太行南缘地区褶皱两翼地层倾角一般不超过15o，褶皱断面形态极为宽缓。云台山地质公园位于区域上任村上八里复式的西翼，任村－上八里复背斜南端抬升幅度较大，轴向10oN～15oE，微向北倾伏，两翼为不整合在太古宇之上的盖层沉积岩系，岩石倾向东或西，倾角5o～15o。区内地层总体倾角平缓，多表现为舒缓波状起伏。</span></p><p style="line-height: 2em; white-space: normal; text-align: center; text-indent: 0em;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img alt="地质地貌 (2).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914412069/地质地貌 (2).jpg"/></span></p><p style="line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">断裂构造</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">区域上的深大断裂构造宏观上分为两组：一是华北裂谷西侧一组；另一组是裂谷转换带北缘的一组。华北裂谷西侧一组断裂带包括任村－西平罗大断裂，青羊口大断裂及邢台－安阳－新乡大断裂等。其走向为NNE，构成华北裂谷带与太行山隆起带的分界线。该断裂带于中生代形成，初期表现为逆断层性质。到古近纪的伸展作用使其重新开裂活动，从而形成上盘向下滑动的正断层，一般落差1500～2000米，最大落差5000～6000米，沿断裂带有新生代玄武岩喷发。裂谷转换带北缘的一组断裂带，以焦作－商丘深断裂带为代表。焦作一带走向近于EW，新乡以东偏转为NW－SE，断面南倾，为一南盘下降的高角度正断层。该断裂带垂直落差西部小，东部大，一般为1000～2000米，最大可达6000米。东段分布有喜马拉雅期玄武岩、安山岩及酸性火山岩，燕山期花岗闪长岩与辉长岩，为一条长期活动的切壳断裂。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em;"><img alt="地质地貌 (3).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914412069/地质地貌 (3).jpg"/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"></span></p><p style="line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">不整合界面</span></strong><span style="font-family: 宋体, SimSun;">　</span></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">不整合界面是区域构造变形的重要表现之一，它表示一个地区的上下两套地层之间发生了沉积间断和生物演化上不连续，是地壳运动的一种反映。其中的角度不整合界面，上下两套岩层间不仅有明显的沉积间断，而且两套岩层以一定的角度相交，反映出这一地区在下伏岩层形成后，曾发生构造运动和剥蚀作用，且构造运动引起的构造变形已经使得下伏岩层的产状产生掀斜和褶皱。云台山地区发育的不整合界面主要有中元古界蓟县系云梦山组与太古宇之间的角度不整合界面，寒武系与云梦山组之间的平行不整合界面，石炭系与中奥陶统之间的平行不整合界面。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="地质地貌 (4).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914412069/地质地貌 (4).jpg"/></p><p style="white-space: normal;"><br/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">地层分布</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">园区地层分布较为齐全，太古宇、元古宇、古生界、中生界及新生界均有见及，属华北地层区山西分区太行山小区。其中以早古生界的寒武系及奥陶系分布最为广泛，是太行山脉的主体地层。它们记录了华北地台自太古宙以来海陆变迁和构造运动，反映了太古代的陆核形成到陆块的增生，从碎屑岩垫板（新元古界）－碳酸盐岩盆地形成（寒武系－奥陶系）－前缘三角洲－陆间盆地的演化（石炭系－二叠系）过程。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572942281083/1572942281083/048b678acab646e6aeb25ad8bd71cf79.jpg" alt="048b678acab646e6aeb25ad8bd71cf79.jpg"/></p><p style="white-space: normal;"><br/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">地貌概况</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山世界地质公园位于太行山转折的东南隅，北东向太行山前断裂与东西向济源－开封断裂互相迁就，形成了比较开阔的弧形断裂带，由北东逐渐转向东西，NE、EW、SN、WN组断裂活动表现相当强烈，太古宙、元古宙地层都升至地表，层崖叠嶂，气势雄伟，直上秦晋，吞东南之云雾，集西北之雨雪，是太行山区地表流水最为丰沛的地段。各组断裂的交切，加之暴雨溪流的冲刷，更有硬度、成分多变的岩层，峡谷纵横，泉瀑飞泻，山峻林密，物种丰富，成为中国第二地形阶梯上的一颗璀璨明珠。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="地质地貌 (7).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914412069/地质地貌%20(7).jpg"/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山世界公园地处中朝地台的核心部位，根据云台山世界地质公园八一水库和白龙潭钾长花岗片麻岩锆石Shrimp测年结果，本区或附近存在着古太古界地块，并经风化剥蚀，在本区形成沉积，并在太古宇晚期和元古宇初期变质成长英质花片麻岩。在嵩阳运动（25亿年左右）形成陆核，吕梁运动（18亿年左右）形成稳定地台，进入以升降运动为主的长期稳定时期。中元古界云梦山组为滨海相红色碎屑岩沉积，后上升造成长达5亿年的沉积间断，继后是寒武系紫红色泥页岩和灰绿色泥页岩、泥质灰岩、白云岩、鲕状灰岩等厚达500～600米的浅海相红色碎屑岩沉积。中奥陶纪之后，地壳再次上升，风化剥蚀，在马家沟组灰岩顶部形成广泛的厚度不等的风化壳，形成铝土矿、铁矿。有古岩溶现象。其后则是中上石炭统和二叠系的含煤系沉积，但已不是本区的重要成景地层。直到中生代后期－新生代（约1.6亿年6500万年来），本区在燕山云去和喜马拉雅运动影响下，强烈差异升降，北部快速抬升，南部强烈下降，逐渐形成了中国大陆的三级地形阶梯中的第二级台阶。外力地质作用，不同地层岩性和不同方向的断裂节理，发生风化和剥蚀，崩塌和沉积，精雕细刻出了美丽的云台山稀世景观，留下了极其丰富的地质遗迹。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="清晨的阳光 李茁_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516504536564/1516504536564/清晨的阳光 李茁_副本.jpg"/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">总之，云台地貌正是在上述古老稳定地块的基础上，经长期垂直运动，保留了巨厚水平岩层，新构造运动影响形成高角度正断层和多组垂直节理裂隙，在重力、流水、冰冻作用下，形成残丘（峰）、原面、断崖长墙、肩阶、宽谷、围谷、瓮谷、谷中峰丛、峰墙、峰林，及隘谷、障谷、巷谷、线谷，侵蚀阶地和沉积阶地，和间其间的溶洞、钙华悬泉、瀑布、跌水等呈层带状组合的一样个性鲜明的特殊地貌形态。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; white-space: normal;"><img alt="豹回头 李军彦_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516504036494/1516504036494/豹回头%20李军彦_副本.jpg"/></p><p style="white-space: normal;"><br/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">地貌特征</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">残丘孤峰</span></strong><span style="font-family: 宋体, SimSun;">　</span></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">见于太行山顶秦晋高原面之上，孤立碳酸盐峰柱，峰丘高100～300米，大小不一，有的断续分布在高原面顶上形成驼峰状或城垛状碟状，远望似万里长城。其中可见不多的溶洞。茱萸峰顶及其附近等处都可见。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img alt="p88九峰相聚待重阳_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516608190735/1516608190735/p88九峰相聚待重阳_副本.jpg"/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">原面（秦晋高原面、太行山顶面）</span></strong></span><span style="font-family: 宋体, SimSun; font-size: 14px;">　</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">本区高原面1100～1300高程。太行山由北东走向转向南西，山势渐低，高原面（山顶面）略微北西倾，奥陶系碳酸盐岩和石炭系煤系地层形成丘陵起伏，越近山前陡坡，切割越剧烈，形成中、晚寒武世和奥陶纪灰岩的断崖、长墙、峰丛、峰林、峰墙和深切峡谷。向原面迅速变成残丘孤峰分布的缓坡面，其残峰顶面在1300余米。可代表本区北台期后的残余，其下展布广阔，形成向北西倾斜的高原面。后期下切的河谷形成阶地，基本上可与太行山南侧河谷阶地对比。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="地质地貌 (16).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914412069/地质地貌%20(16).jpg"/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">断崖</span></strong><span style="font-family: 宋体, SimSun;">　</span></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">太行山面向平原侧，常常有近直立的陡壁悬崖，高50～300米不等，延伸可达500～5000米，多由中寒武统张夏组巨厚块状白云质灰岩和白云岩、灰岩，及中元古界云梦山组石英岩状砂岩在近垂直断层、列隙、节理的控制下，因其下部夹薄层泥页岩或太古界花岗片麻岩和其上的角度不整合面古风化壳，抵御流水淘蚀或裂隙渗水使泥质岩软化形成扁洞，上面负荷过重使裂隙张开破裂垮塌。这也是本区河流向源侵蚀的主要方式之一，这种断崖还出现在沟谷的岸壁。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="地质地貌 (18).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914412069/地质地貌%20(18).jpg"/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">长墙</span></strong><span style="font-family: 宋体, SimSun;">　</span></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">在长墙形成时可能有一组或两组平等断裂使之切成一系列平等断崖的岩石板片，流水侵蚀使有的岩石板片凸出成峰墙状，或者相邻水系侧蚀形成壶穴，使之变薄甚至蚀穿成穿洞或天生桥。进一步可坍塌，形成锯齿状峰墙。厚度一般1～5米，多则10余米，两侧直上直下的悬崖，有时高达100米，延长超过10公里。但也有的很短，残存于山脊或斜坡，可成群出露，十分秀丽壮美。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572942195537/1572942195537/ae1e68c9d7dd4c4a80b424b6629b1f2b.jpg" alt="ae1e68c9d7dd4c4a80b424b6629b1f2b.jpg"/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">肩阶（肩状阶梯）</span></strong></span><span style="font-family: 宋体, SimSun; font-size: 14px;">　</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">形成长崖的地层中，有时夹泥质或泥灰质薄层夹层，或者有不整合等薄弱层；在流水冲刷、淘蚀或者沿裂隙孔穴下渗的地下水的浸蚀，使之变软，流蚀形成额洞、脚洞、扁洞后，上部岩层换稳，重力崩塌，特别是裂隙密集发育时，坍塌可形成一宽窄不等的平台状长廊，窄的1米，宽的达30米左右，其发育在宽谷两壁最好，也是峡谷展宽最为常见的方式。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img alt="山环水抱云台美 吴惠玲_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516505332262/1516505332262/山环水抱云台美 吴惠玲_副本.jpg"/></span></p><p style="line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">宽谷、围谷（瓮谷）</span></strong></span><strong><span style="font-family: 宋体, SimSun; font-size: 14px;">　</span></strong></p><p style="line-height: 2em; text-indent: 2em; white-space: normal; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">地壳上升运动停止或变缓后，河流侧蚀作用加强，原障谷隘谷展宽，岸壁侵蚀崩塌，形成阶地或肩阶，坡度变缓；越向下游，其河谷愈宽，本区宽谷大多呈U字形，云台山地区大多数河谷上部都具宽谷的特征；在河流流经断崖的附近，若两组节理裂隙同时发育，崖壁两组断裂崩塌，形成Ω形围谷，半圆形，半径50～300米，天然回音壁。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">障谷、隘谷、巷谷、线谷、悬谷、套谷（谷中谷）　在云台山地区河流的某些地段，特别是厚层状的石英砂岩、白云质灰岩中，由于裂隙或节理密集，岩石破碎，在地壳上升或因气候变湿而下切，侵蚀作用加强时，在原宽谷询问或侧壁形成狭窄的新谷地；基本上无阶地发育，构成两岸陡立的峡谷。因其出现在宽谷底部而称套谷（或谷中谷），如在河谷高差较大的裂点处又形成悬谷，流水飞泻即成瀑布。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">壶穴　在河谷裂点下方可急弯的凹岸，或软硬岩石变化的河道地段，出现一些大小不一的凹坑，在的5～10米直径，深3～5米，小的仅数十厘米，后期砾石在其中旋转磨蚀，使之肚大口小，似瓮状。当其壁磨穿后形成石梁、天生桥等造型。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="p14-15秀水洗就丹崖色 丹崖相伴水更深_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516608409486/1516608409486/p14-15秀水洗就丹崖色 丹崖相伴水更深_副本.jpg"/></p><p style="line-height: 2em; white-space: normal; text-align: center; text-indent: 0em;"><img src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572942143567/1572942143567/322b16dc3a174da1850619a8e8158118.jpg" alt="322b16dc3a174da1850619a8e8158118.jpg"/></p><p style="line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">岩溶地质景观</span></strong></span><span style="font-family: 宋体, SimSun; font-size: 14px;">　</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">本区历地壳上升较快，地层水平，垂直节理（裂隙）发育，加之气候属温带，时干时潮，雨量集中成暴雨，化学风化不强，物理风化流水冲刷剧烈，岩石崩塌最为明显，所以岩溶作用不是本区最主要的造景地质作用。但在合适的构造位置，也有一些岩溶景观。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="p33山石无意 流水有情_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516607866727/1516607866727/p33山石无意 流水有情_副本.jpg"/></p><p style="white-space: normal;"><br/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">1.溶洞：地下水冲刷和溶蚀形成，分三层，高度1100～1300米，800～600米，300～100米，洞体长度不大，较为简单，有时因裂隙切过而形成天窗，成近等距排列，为地表水下渗的通道，向下也可形成水潭，洞体长30～100米，高1～5米，无明显的“厅”，较直，很少见多层洞和弯曲洞，石笋、石钟乳少。但有几个洞底有砾石层，其上下有厚薄不等的钙板沉积层理发育，砾石大小磨圆度都有较大变化，可能是从落水洞天窗上冲下来沉积形成。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img alt="地质地貌 (14).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914412069/地质地貌%20(14).jpg"/></span></p><p style="white-space: normal;"><br/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">2.钙华：地下泉水溶解碳酸钙带出地表，在岩壁形成钙华沉积，为肺叶状30～50厘米长，层层叠叠，集中分布。在钙华叶体之上，常有苔藓水草植物生长，或者树叶残枝积淀，被后期生成的钙华包裹。久而久之，钙华体增大，形成被状或锥状，高数米，甚至数十米，宽几米。这主要决定于悬泉的高度、宽度和出水口的形态等；当泉水从碳酸盐洞穴直接流入河道，则在下游近处河床里结成钙华砂，有的在水草上积淀，在跌水处钙华集中沉淀成被状，有时厚达2～3米，也有在河漫滩岸边积沉形成钙华，板层理纹理清晰，有时见冲刷现象，或夹石英砂层或砾石层，夹植物的残枝叶片和螺类遗体。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="p6红石峡-虽是清流 却比乳汁_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516607561831/1516607561831/p6红石峡-虽是清流 却比乳汁_副本.jpg"/></p><p style="white-space: normal;"><br/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">水体地质景观</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">地壳的迅速抬升，断裂节理成群发育，软岩层夹层的出露，使河谷中出现众多跌水，高则3～5米，低则数十厘米，以至于在潭瀑峡头314形成米的天瀑；拐弯和跌水及软岩层部有很多壶穴产生；不同方向节理控制也可形成曲流，但本区不少河流的曲流则是继承性的，个别点曲流颈被冲刷洞穿，还可形成牛轭湖、离堆岩等地貌形态。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">红石峡河谷中除六级侵蚀阶地外，基本未形成其他类型阶地；但其他河段则有六级基座阶地、内迭阶地等，反映了构造阶段性抬升和气候的变化。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="p46-47泉瀑峡-天上霓裳曲 人间大瀑歌_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516607891887/1516607891887/p46-47泉瀑峡-天上霓裳曲 人间大瀑歌_副本.jpg"/></p><p><br/></p>',
          code: 'dzdm',
          travelTime: '',
          level: 2,
          navImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495874895781/茱萸峰-鲲鹏展翅.jpg'
          ],
          channelImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494914329680/地质地貌 (1).jpg'
          ],
          exInfo: {
            address: '',
            hotline: '',
            videoIntro: ''
          },
          recommedNews: []
        },
        {
          id: 4492,
          url: 'profile-desc.html',
          name: '历史人文',
          summary:
            '在中国历史上，凡名山大川与宗教无关者甚少。云台山作为旅游文化名山，从汉末至今的两千多年间，不但引来了众多的帝王将相、文人雅士的青睐，佛教、道教也接踵而至，并在此互相影响，生根开花，演绎出灿烂的云台山宗教文化，使云台山成为一座底蕴厚重的宗教名山。佛教自后赵时期印度高僧佛图澄在这里创建元极寺以后，多有释家弟子到此禅栖修行，并为佛教的发展作出了重要的贡献。',
          content:
            '<p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">在中国历史上，凡名山大川与宗教无关者甚少。云台山作为旅游文化名山，从汉末至今的两千多年间，不但引来了众多的帝王将相、文人雅士的青睐，佛教、道教也接踵而至，并在此互相影响，生根开花，演绎出灿烂的云台山宗教文化，使云台山成为一座底蕴厚重的宗教名山。佛教自后赵时期印度高僧佛图澄在这里创建元极寺以后，多有释家弟子到此禅栖修行，并为佛教的发展作出了重要的贡献。如隋初净影寺慧远法师，一生著书立说，第一个提出净土分类说，成为净土宗初祖；又如唐代中期百岩大师，师承马祖，北上弘法，来到百家岩后在讲禅说法，在当时的朝野引起极大的震动，并到京城与发难者激烈辩论，最终将禅宗发扬光大、传播天下，成为中国佛教界的主流。云台山山势嶙峋，岩壁层深，多有凡人罕至之处，加之这里泉瀑飞流，林幽景美，是道家所倡导的理想修行之处，因此道教在汉末形成后，就将云台山列为七十二福地之一。事实上，也多有得道高人在此活动。魏晋时期的王烈和孙登始终是竹林七贤的倾慕对象，王烈食黄精、石髓，寿达三百多岁；孙登穴洞而居，无喜无愠，一声长啸，引得凤凰来仪。此外，西晋魏华存首创“吐纳”、“导引”、“咽津”、“存思”、“服气”及“三丹田”的道家修行之说，她所著的《黄庭经》成为上清派的修行要义，其本人也被道教尊为紫虚元君、南岳夫人。经过两千多年的发展，佛、道在云台山还呈现了合流的趋势。虽然民国时期和“文化大革命”期间，宗教建筑遭到了极为严重的人为破坏，但20世纪80年代恢复宗教政策特别是对云台山景区进行开发以后，寺院道观大都得到了复建甚至扩建，重新恢复了宗教名山的本来面貌，景区岩谷之间梵刹严整，峰洞上下庙宇宏伟，历代碑刻、佛塔更是散落林立其中。</span></p><p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;</span></p><p style="text-align: center; line-height: 2em;"><img alt="7d36f34241214e09902af9dfb1de4972.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943331814/1572943331814/7d36f34241214e09902af9dfb1de4972.jpg"/></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体,SimSun; font-size: 14px;">宗教文化</span></strong></span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体,SimSun; font-size: 14px;">佛教</span></strong></span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">云台山有佛教活动记载较早。据民国18年版《河南新志》记载：“中国有佛寺自自州始，白马寺是也。下此，少林、元极建置之古，均远在隋唐之前。”元极寺遗址在今天的云台山景区内的白鹿山上，其创始人为印度名僧佛图澄。西晋永嘉四年（310年），佛图澄东来中土。后赵石勒时期，佛图澄取得石勒父子的信任，到处营建佛寺。为此他到处游历名山大川，当走到白鹿山时，就在此处依峰构寺，创建了元极寺。至北齐年间，又对寺庙加以扩建。元极寺建于后赵时期（219～351年），不仅在修武是最早的佛教寺院，而且其建寺年代在河南来说仅次于白马寺，比建于北魏孝文帝太和二十年（496年）少林寺还要早一百多年。此外，据考证，圆融寺也是佛图澄同时期所创建。</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">南北朝时期，佛教进入大发展时期。在云台山地区，除原有的元极寺、圆融寺外，还有建于北齐天宝七年的柏岩寺，即今天的百家岩寺。当时有位名叫稠慧的高僧，奉北齐文宣帝旨意，在太行山一带沿山建寺二十余所，柏岩寺即是其中之一。该寺原名大护国仁王寺，因其地在柏岩，故得名柏岩寺。此后，又在云台山下建有五里源崇明寺、山阳城藏梅寺等，都是柏岩寺的下院。&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">唐代中期以前，禅宗在中国北方尤其在长安还受到其他教派的排斥。著名的南宗马祖曾为此北上弘法，但未达预期目的。其后，他的一个俗名为谢怀晖的弟子，誓以传播南宗禅法为己任，曾游历清凉（五台山）、幽州、徂徕山（今山东泰安县东南），后到怀州修武县柏岩（今百家岩）修行传法，前来问法的很多，门徒多至数百，并共尊之为百岩大师。他的“净心”、“自悟”之说，在当时北方的佛教界引发了很大的震动，于宪宗元和三年（808年）应诏入京讲说禅要，经过激烈的论辩，禅宗最终赢得了朝廷的尊崇，从此成为中国佛教的主流教派，流布千年，风及海外。</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">宋代以后，佛教在云台山进入平稳发展时期，除对原有的寺院进行重修、扩建外，明初还在沟坡修建了万善寺。嘉靖年间，有临济宗无暇和尚来万善寺作住持，由此该寺成为临济宗的道场。民国时期，由于战乱，佛教寺院多有破坏，最为严重的是千年名刹百家岩寺被冯玉祥的军队在剿匪时被焚毁。新中国成立后，由于人民生活安定和无神论的宣传，信佛者日少，寺僧也大多还俗。文化大革命期间，云台山寺院悉数被毁，僧人也被驱赶还俗，佛教活动停止。20世纪80年代以来，随着宗教政策的落实，佛教活动开始恢复。</span></p><p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;</span></p><p style="text-align: center; line-height: 2em;"><img alt="2e359c40b82945269413ec6c6fb498db.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943360210/1572943360210/2e359c40b82945269413ec6c6fb498db.jpg"/></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体,SimSun; font-size: 14px;">万善寺</span></strong></span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">位于云台山茱萸峰南面山谷沟坡处，俗名“沟坡寺”，又叫“狗刨寺”，建于明代弘治年间（1487～1505年）。万善寺的起源来历有多种说法，其中以因狗刨地得泉，百姓感戴佛恩而自发捐资创建的传说流传最广。抗日战争时期，寺院大部被烧，建国初期彻底被毁。1990年，落实宗教政策，寺院得以重建，香客盛况如初。1993年7月，泰国华侨严彬为寺院捐赠一尊铜胎金佛。</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span></p><p style="text-align: center; line-height: 2em;"><img alt="云台山历史人文 (4).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494915587512/云台山历史人文 (4).jpg"/></p><p style="line-height: 2em;">&nbsp;</p><p style="line-height: 2em; text-indent: 2em;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体,SimSun; font-size: 14px;">太极文化</span></strong></span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">太极拳是我国著名的内家功夫名拳，发源于焦作温县陈家沟，是明朝末年陈家沟村民陈王廷，依据祖传拳术，吸取民间诸优秀拳种之精华，结合导引、吐纳术、中医经络学，创编的一种内功拳种。三百多年来，经过世代相传，逐渐演化出杨式、吴式、孙式、武式等诸多流派，目前在全世界参练总人数达3亿多人，成为最受欢迎的世界第一运动。</span></p><p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;</span></p><p style="text-align: center; line-height: 2em;"><img alt="云台山历史人文 (5).jpg" src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494915587512/云台山历史人文 (5).jpg"/></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">陈式太极拳是东方文化的瑰宝，它的特点是以刚为主，刚中有柔，动作窜蹦跳跃、闪展腾挪，具有锻炼肌肉、舒经活络、调整呼吸、平心静气的作用，长期练习可强身健体、延年益寿，达到身心健康和谐发展。在云台山小寨沟景区的青山绿水间，在树影摇曳、微风徐徐的河畔，每天都会定时向游客展示陈式太极拳表演，使您尽享云台山自然与文化的完美融合。</span></p><p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;</span></p><p style="text-align: center; line-height: 2em;"><img alt="325ef05ee7654a5e8edb2ce1db1527a2.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943422984/1572943422984/325ef05ee7654a5e8edb2ce1db1527a2.jpg"/></p><p style="line-height: 2em;"><span style="font-size: 16px;">&nbsp;</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体,SimSun; font-size: 14px;">名人遗迹</span></strong></span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-size: 16px;"><strong><span style="font-family: 宋体,SimSun; font-size: 14px;">唐王试剑石</span></strong></span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">云台山潭瀑峡，有一块长方形卧石，长约两丈，宽约丈余，石上布满一排排长条印痕，人称唐王试剑石。</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">相传，在隋末唐初年间，唐高祖李渊在太原起兵称帝，为一统天下，指令唐王李世民率兵，从山西秘密出发，穿越太行山，以出其不意之计谋，消灭盘踞在怀川的刘武周大军。</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">李世民接到指令，迅速整顿军马，筹备粮草，并派出一支侦查小分队，悄悄潜入云台山一带，细摸详情。当得知对方依仗北依太行，南临黄河，西有王屋，易守难攻，而孤芳自赏期间。李世民一声令下，亲率10万人马，一路穿山越岭，马不停蹄，很快进入潭瀑峡一带，计划在此修整数日，再率兵杀出太行山，给刘武周来个突然袭击，消灭对方。</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">正在这时，忽闻有一汉子前来献剑，李世民甚感惊奇，令人将汉子带上前来。汉子见了唐王，将一把宝剑双手献上说：将军在上，此剑系“竹林七贤”嵇康亲手锻造，名曰嵇康剑。锋利锐利，削人如泥，将军若是佩戴在身，良将狭路相逢，将军必将刘武周杀个片甲不留，死无葬身之地！</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">李世民接过宝剑看了又看，半信半疑，随口问道：你是何方人士，为何前来献剑？汉子声称系“竹林七贤”向秀后代子孙，因看不惯隋朝官场腐败，当地官员欺诈百姓，这才前来献剑。李世民显得十分高兴，为检验此剑的锋利度，即转过身来，连续挥剑砍向巨石。剑落处，只见金光飞溅，一阵“啪啪啪”作响，声音清脆，剑起剑落，石上留下道道剑痕。于是连声感叹：天赐宝剑，隋朝当灭，刘武周当败也！</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">数日后的一天，李世民腰佩嵇康剑，一声令下，征伐大军冲出太行，一路人喊马叫，势如破竹，很快将刘武周的兵马给消灭了。此后，李世民无论去何处讨伐征战，总把嵇康剑佩挂在身，视为珍宝。</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;">后来，人们称李世民试剑巨石，叫唐王试剑石。</span></p><p style="line-height: 2em; text-indent: 2em;"><span style="font-family: 宋体,SimSun; font-size: 16px;"></span>&nbsp;</p><p style="text-align: center; line-height: 2em;"><img alt="“G73A0015”为智能对象-1.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943452038/1572943452038/“G73A0015”为智能对象-1.jpg"/></p>',
          code: 'lsrw',
          travelTime: '',
          level: 2,
          navImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495874540771/月光-张学良11111.jpg'
          ],
          channelImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494915587512/云台山历史人文 (1).jpg'
          ],
          exInfo: {
            address: '',
            hotline: '',
            videoIntro: ''
          },
          recommedNews: []
        },
        {
          id: 4493,
          url: 'profile-desc.html',
          name: '河流',
          summary:
            '云台山国家风景名胜区地处修武县北部山区，地表河流主要有纸坊沟河、山门河、清水河等季节性自然河流，大气降水是其主要补充水源，它们旱季无水或少水，汛期则水势汹涌。青龙峡景区地表水属海河流域卫河的次级流域区，以南北向的正山河－陪嫁妆－双庙－北业一线为分水岭，又可分为东部青龙洞河流域和西部东大河流域两具次级流域单元。',
          content:
            '<p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">河流</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山国家风景名胜区地处修武县北部山区，地表河流主要有纸坊沟河、山门河、清水河等季节性自然河流，大气降水是其主要补充水源，它们旱季无水或少水，汛期则水势汹涌。青龙峡景区地表水属海河流域卫河的次级流域区，以南北向的正山河－陪嫁妆－双庙－北业一线为分水岭，又可分为东部青龙洞河流域和西部东大河流域两具次级流域单元。</span></p><p style="white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em;"><img alt="1cba4eb59a964078b42ef2617e8ac2b8.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943750510/1572943750510/1cba4eb59a964078b42ef2617e8ac2b8.jpg"/></p><p><br/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">地下水</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山景区的含水层主要是寒武系和奥陶系的石灰岩、白云岩；隔水层是寒武系页岩及震旦系石英岩、砂岩。以黑龙王庙断层为界，该区可分为南北两个水文地质单元，其北是一个以出露地表的隔水底板为代表的水文地质单元，地下水在上部含水层中向沟谷方向渗透，遇泥质灰岩形成的不透水层，以泉的形式出露地表；在断层以南隔水层深埋地下，地表水渗入地下，使地表水缺乏。但21世纪初在东岸上村236米处见到地下水。地下水的水质，以子房沟上游山西陵川县夺火乡的勤泉与双头泉的水质化验结果为代表，水的化学类型为HCO3—Ca2+型，水质为低矿化弱碱性微硬水。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="ca072674aa20417e82a989e7d2290475.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943722509/1572943722509/ca072674aa20417e82a989e7d2290475.jpg"/></p><p style="line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">泉源</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">修武县处于太行山前倾斜地带，因而泉水得以出泄地面，北至太行，南至平原，县境内自然泉源星罗棋布。据民国20年（1931年）《修武县志》记载，境内共有泉源45眼，其中入河泉源25眼，即灵泉、洸河泉、土桥泉、楝树泉、螃蟹泉、白水泉、皇母泉、石棚泉、马鸣泉、高河泉、杨河泉、大朴泉、小朴泉、烈杠泉、漉沙泉、龙八泉、巧妇泉、鸣鸟泉、浊鹿泉、蒋村泉、圣井泉、马坊泉、海子泉、龙母泉、吴公泉；不入河的泉源20眼，即柳泉、黑婆泉、玉女泉、吃水泉、王烈泉、长泉、一线泉、五孔泉、白甘泉、蛤蟆泉、寨坡泉、黄龙洞泉、观音泉、滴水泉、青龙洞泉、石壁泉、双龙洞泉、神农洞泉、沙石泉、杨树泉。其中，景区内的泉源大多为不入河的泉源，如玉女泉、王烈泉、长泉、一线泉、黄龙洞泉、滴水泉、青龙洞泉等。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">在历史比较著名的要数长泉，即明月泉。明月泉位于县城东北方庄镇沙墙村北云台山景区百家岩。郦道元《水经注》云：“长泉水出白鹿山，伏流一十三里，重源浚发于邓城西北，世亦谓之重泉水也。”其水穿竹林向西南曲流而下，至石河即成暗流，在辉县市邓城村重新涌出地面，向东南流入卫河。该泉一般流量为0.01~0.02立方米/秒，枯水期更小。</span></p><p style="text-align: center; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;"></span><br/><img alt="9d071d94078a48018fb45ee983756395.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943779992/1572943779992/9d071d94078a48018fb45ee983756395.jpg"/></p><p style="line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">瀑布</span></strong></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">无论是云台山景区还是青龙峡景区，由于水源充沛，加上地形独特，形成了众多的跌水和瀑布。这些瀑布，有的气势磅礴，喷云吐雾；有的宛若锦缎，舒展平缓；有的时合时分，变化多端；有的相依相偎，恰似情人。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="text-align: center; line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><img alt="p125-p126_副本.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1516610599292/1516610599292/p125-p126_副本.jpg"/></span></p><p style="line-height: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">云台山大瀑布</span></strong></span></p><p style="text-align: justify; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">又称老龙潭瀑布、老潭沟瀑布、云台天瀑。在云台山景区老潭沟西端，北邻山西省陵川县。该瀑布发源于陵川县境双头泉，流至老潭沟上方悬崖，形成6米多宽的水束，突然从310多米高的两峰豁口落下，跌落为20余米宽的瀑面，飞流泻入老潭沟内，轰然巨响，声震山谷。其泻落处水雾缭绕，高达山腰，水珠洒落百米之外，冷气逼人。该瀑布落差冠绝全国，号称华夏第一高瀑，为云台山风景区主要景点之一。</span></p><p style="text-align: justify; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">天门瀑布　在百家岩西端。因瀑流自天门谷口下注，故名。槽口宽10米，落差167米，注处有池，相传魏晋时期“竹林七贤”领袖嵇康曾在此淬剑，因而得名“嵇康淬剑池”。每值夏秋汛期，这里瀑声如雷，一团白雾倏上山腰，倏落涧底，气势雄伟壮观。此瀑古时即有声名，历代文人多有吟咏，被誉为“北国龙湫”。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1494917046919/1494917046919/%E4%BA%91%E5%8F%B0%E5%B1%B1%E6%B2%B3%E6%B5%81%20(5).jpg"/></p><p style="white-space: normal;"><br/></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-size: 18px;"><strong><span style="font-family: 宋体, SimSun;">黑龙潭瀑布</span></strong></span><span style="font-family: 宋体, SimSun; font-size: 14px;">　</span></p><p style="text-align: justify; line-height: 2em; text-indent: 2em; white-space: normal;"><span style="font-family: 宋体, SimSun; font-size: 18px;">又名滴水瓮瀑布。在云台山景区圪老峪村东南子房沟中，属水流飞落形成。该瀑常年下注，其下部岩壁因水流渗漏塌落，状如瓮形，故而又得名滴水瓮瀑布。槽口宽1米，落差60米，常年水量0.04~0.05立方米/秒。瀑布南侧有棋盘山，上方有温盘峪，周围水潭瀑流，奇峰险岭，景色幽美，为云台山风景区一景点。</span></p><p style="line-height: 2em; text-indent: 2em; white-space: normal;"><br/></p><p style="text-align: center; line-height: 2em; white-space: normal;"><img alt="ca432f4759be4ad8812dc85a1f6d7681.jpg" src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943857011/1572943857011/ca432f4759be4ad8812dc85a1f6d7681.jpg"/></p><p><br/></p>',
          code: 'hl',
          travelTime: '',
          level: 2,
          navImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494916223627/云台山河流 (2).jpg'
          ],
          channelImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494916223627/云台山河流 (2).jpg'
          ],
          exInfo: {
            address: '',
            hotline: '',
            videoIntro: ''
          },
          recommedNews: []
        },
        {
          id: 4494,
          url: 'profile-desc.html',
          name: '气候',
          summary:
            '云台山国家风景名胜区所在的修武县属暖温带大陆性季风型气候，春夏秋冬四季分明，其时间划分为：春季自3月下旬至5月中旬，共约55～60天；夏季自5月下旬至8月下旬，共约110～120天；秋季自9月上旬至11月初，共约55～60天；冬季自11月上旬至次年3月中旬，共约140天。该县四季的规律是冬季时间长，夏季次之，春、秋季较短。总的气候特征是夏热多雨，冬季干冷，春多风沙，秋凉气爽，气候年差较大；热量充足，光温辐射潜力大，有利于农作物生长。但降水季节分布不均匀，旱涝风雹等自然灾害频繁。景区地处修武县北部山区，该区地形起伏，地势较高，气温偏低，冬冷时间较长。气候随海拔与山形山势的影响，变化较大，形成类别各异的小气候区。年平均气温在14℃以下。无霜期短，通常在200天以下，初霜期比平川地区早出现7天左右，热量资源少，一般不利于农作物一年两熟耕作制。夏季降水量比平川气候区明显偏多，而且降水强度大。每当山洪暴发，水土流失严重，对人民生命财产危害较大。',
          content:
            '<p style="white-space: normal; text-indent: 2em; line-height: 2em; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山国家风景名胜区所在的修武县属暖温带大陆性季风型气候，春夏秋冬四季分明，其时间划分为：春季自3月下旬至5月中旬，共约55～60天；夏季自5月下旬至8月下旬，共约110～120天；秋季自9月上旬至11月初，共约55～60天；冬季自11月上旬至次年3月中旬，共约140天。该县四季的规律是冬季时间长，夏季次之，春、秋季较短。总的气候特征是夏热多雨，冬季干冷，春多风沙，秋凉气爽，气候年差较大；热量充足，光温辐射潜力大，有利于农作物生长。但降水季节分布不均匀，旱涝风雹等自然灾害频繁。景区地处修武县北部山区，该区地形起伏，地势较高，气温偏低，冬冷时间较长。气候随海拔与山形山势的影响，变化较大，形成类别各异的小气候区。年平均气温在14℃以下。无霜期短，通常在200天以下，初霜期比平川地区早出现7天左右，热量资源少，一般不利于农作物一年两熟耕作制。夏季降水量比平川气候区明显偏多，而且降水强度大。每当山洪暴发，水土流失严重，对人民生命财产危害较大。</span></p><p style="white-space: normal; text-indent: 2em; line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;"><br/></span></p><p style="white-space: normal; text-indent: 2em; line-height: 2em;"><span style="font-family: 宋体, SimSun; font-size: 14px;"></span></p><p style="white-space: normal; text-align: center; line-height: 2em;"><img src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1572943938127/1572943938127/390c62df2bc64d2e837edaf642b16573.jpg" alt="390c62df2bc64d2e837edaf642b16573.jpg"/></p><p style="white-space: normal; line-height: 1.5em; text-indent: 2em;"><br/></p><p style="white-space: normal; text-indent: 2em; line-height: 2em; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">景区年平均气温，南部谷地为15.3℃,北部山地为11.4℃；最热月平均气温27.5℃，最冷月平均气温0.9℃；极端最高气温43.3℃，极端最低气温－17.9℃；全年大于0℃积温4300～5500℃；多年平均降水总量700毫米，无霜期200天，日照时数2272小时。主导风向，夏季为西南风，冬季为东北风，全年平均风速2.9米/秒。据测，景区内常年平均温度比修武县及焦作市区低3.7℃，1月高0.9℃，7月低4℃；无霜期少50～80天；降水量多74～146毫米，陆地蒸发量少60毫米；日照时数少152小时；风力大1.5倍。</span></p><p style="white-space: normal; line-height: 1.5em; text-indent: 2em;"><br/></p><p style="white-space: normal; text-align: center; line-height: 2em;"><img src="http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494916507239/云台山气候2.jpg" alt="云台山气候2.jpg"/></p><p><br/></p>',
          code: 'qh',
          travelTime: '',
          level: 2,
          navImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494916507239/云台山气候.jpg'
          ],
          channelImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494916507239/云台山气候.jpg'
          ],
          exInfo: {
            address: '',
            hotline: '',
            videoIntro: ''
          },
          recommedNews: []
        },
        {
          id: 4495,
          url: 'profile-desc.html',
          name: '旅游资源',
          summary:
            '云台山风景区四季分明，景色各异，四季旅游皆宜。春天万物复苏，山花烂漫，是春游赏花的好时节；夏季山林葱郁，飞瀑流泉，风景如画；秋天层林尽染，是观秋色、赏红叶的佳地；冬季银装素裹，群山莽莽苍苍，可以领略到壮美苍茫的北国风光。云台山国家风景名胜区以山地为主，自然生态完善齐全，生长着茂盛的原始次生林和草本植物，不仅种类众多，而且有多种名树古木，红豆杉、榔榆、国槐、白皮松等都有数百年的树龄，有的甚至有千年之久；太行花更是这里特有的品种。由于生态环境复杂多样，植物种质丰富，大型食草动物和食肉动物都能在此栖息繁衍，如黄鹿、黄羊、金钱豹、狼等，并且有多群太行猕猴在此活动，成为云台山重要的观赏动物。1993年，国家林业部批准成立云台山国家森林公园；1998年，国务院又批准成立国家猕猴自然保护区。',
          content:
            '<p style="white-space: normal; text-indent: 2em; line-height: 2em; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山风景区四季分明，景色各异，四季旅游皆宜。春天万物复苏，山花烂漫，是春游赏花的好时节；夏季山林葱郁，飞瀑流泉，风景如画；秋天层林尽染，是观秋色、赏红叶的佳地；冬季银装素裹，群山莽莽苍苍，可以领略到壮美苍茫的北国风光。</span></p><p style="white-space: normal;"><br/></p><p style="white-space: normal; text-align: center;"><img src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1494917509478/1494917509478/云台山旅游资源 (2).jpg" alt="云台山旅游资源 (2).jpg"/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal;"><br/></p><p style="white-space: normal; text-indent: 2em; line-height: 2em; text-align: justify;"><span style="font-family: 宋体, SimSun; font-size: 18px;">云台山国家风景名胜区以山地为主，自然生态完善齐全，生长着茂盛的原始次生林和草本植物，不仅种类众多，而且有多种名树古木，红豆杉、榔榆、国槐、白皮松等都有数百年的树龄，有的甚至有千年之久；太行花更是这里特有的品种。由于生态环境复杂多样，植物种质丰富，大型食草动物和食肉动物都能在此栖息繁衍，如黄鹿、黄羊、金钱豹、狼等，并且有多群太行猕猴在此活动，成为云台山重要的观赏动物。1993年，国家林业部批准成立云台山国家森林公园；1998年，国务院又批准成立国家猕猴自然保护区。</span></p><p style="white-space: normal;"><br/></p><p style="white-space: normal; text-align: center;"><img src="http://file.geeker.com.cn/uploadfile/hzcloud/zxw/content/1494917535395/1494917535395/云台山旅游资源 (1).jpg" alt="云台山旅游资源 (1).jpg"/></p><p><br/></p>',
          code: 'lyzy',
          travelTime: '',
          level: 2,
          navImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494916674112/云台山旅游资源 (2).jpg'
          ],
          channelImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494916674112/云台山旅游资源 (2).jpg'
          ],
          exInfo: {
            address: '',
            hotline: '',
            videoIntro: ''
          },
          recommedNews: []
        },
        {
          id: 4496,
          url: 'animal-list.html',
          name: '动物植物',
          summary:
            '云台山生态系统　云台山有多种食草动物，如山羊、野兔；还有一些食肉动物，如野猪、狼等；更有大型食肉动物，如豹等。这些动物，构成一种完善的捕食者食物链，即：绿色植物——食草动物（山羊、野兔等）——一级食肉动物（野猪、狼等）——二级食肉动物（豹等）。上述情况，可以推知，云台山的自然生态系统，在演化进程中，存在着完善的自然捕食者食物链，这种食物链是维持生态系统内部生态平衡、能量正常传递的物质基础，因而，也是推动自然生态系统正常演替，即推动本生态系统由青年生态系统向成熟生态系统演替的物质基础。故可推断，云台山生态系统发育良好，自然演替将是正常的。',
          content:
            '<p style="font-family: 宋体, SimSun; font-size: 18px;white-space: normal; text-indent: 2em; line-height: 2em; text-align: justify;">云台山生态系统　云台山有多种食草动物，如山羊、野兔；还有一些食肉动物，如野猪、狼等；更有大型食肉动物，如豹等。这些动物，构成一种完善的捕食者食物链，即：绿色植物——食草动物（山羊、野兔等）——一级食肉动物（野猪、狼等）——二级食肉动物（豹等）。上述情况，可以推知，云台山的自然生态系统，在演化进程中，存在着完善的自然捕食者食物链，这种食物链是维持生态系统内部生态平衡、能量正常传递的物质基础，因而，也是推动自然生态系统正常演替，即推动本生态系统由青年生态系统向成熟生态系统演替的物质基础。故可推断，云台山生态系统发育良好，自然演替将是正常的。</p>',
          code: 'dw',
          travelTime: '',
          level: 2,
          navImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1495871745524/IMG_3339.jpg'
          ],
          channelImage: [
            'http://files001.oss-cn-shenzhen.aliyuncs.com/uploadfile/hzcloud/web/zxw/content/1494916951329/云台山动物.jpg',
            'http://file.geeker.com.cn/hzcloud/web/zxw/content/1574056547100云台山动物.jpg'
          ],
          exInfo: {
            address: '',
            hotline: '',
            videoIntro: ''
          },
          recommedNews: []
        }
      ],
      activeId: '',
      fixed: false,
      showBtn: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    changeDate (e) {
      console.log(e)
    },
    changeItem (id) {
      this.activeId = id
      const currentItem = document.getElementById(id)
      const scrollTo = currentItem.offsetTop
      console.log(scrollTo)
      const theDoc = document.documentElement
      theDoc.scrollTop = scrollTo
    },
    centerNavScroll () {
      try {
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        scrollTop > 484 ? (this.fixed = true) : (this.fixed = false)
        scrollTop > 800 ? this.showBtn = true : this.showBtn = false
      } catch (error) {}
    }
  },
  mounted () {
    window.addEventListener('scroll', this.centerNavScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.centerNavScroll)
  }
}
</script>

<style lang="less" scoped>
.tabbar-visit {
  margin-bottom: 24px;
  .header {
    height: 500px;
    margin-bottom: 24px;
    .el-image {
      height: 100%;
      width: 100%;
    }
  }
  .content-item {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .left-rel {
      position: relative;
    }
    .left {
      width: 230px;
      padding: 20px 30px;
      background-color: #f6f0eb;
      // .item {
      //   // .item-title {
      //   // }
      // }
    }
    .right {
      width: 880px;
      .title {
        padding: 10px 0 10px;
        font-size: 20px;
        line-height: 20px;
        vertical-align: middle;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: -6px;
          top: 11px;
          display: block;
          width: 3px;
          height: 20px;
          background-color: #000;
        }
      }
    }
  }
}
</style>
