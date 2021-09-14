<?php 
/**
 * 站点首页模板
 */
if(!defined('EMLOG_ROOT')) {exit('error!');}
if(isset($_GET["setting"])){include View::getView('setting');exit();}
if(isset($_GET["user"])){include View::getView('user/index');exit;}
if(isset($_GET["reset"])){include View::getView('user/reset');exit;}
if(isset($author)){include View::getView('user/author');exit;}
?>
<div id="<?php echo get_template_name();?>">
<section class="container">
<?php
if(!empty($record)) {
			//日期记录
			$year    = substr($record,0,4);
			$month   = ltrim(substr($record,4,2),'0');
			$day     = substr($record,6,2);
			$archive = $day?$year.'年'.$month.'月'.ltrim($day,'0').'日':$year.'年'.$month.'月';
			echo '<section class="container"><div class="mbx"> <a href="/">首页</a> »  '.$archive.'发布的文章</div> </section>';
		}
		if(!empty($sort)) {
			//栏目页显示
			$des = $sort['description']?$sort['description']:'这家伙很懒，还没填写该栏目的介绍呢~';
			echo '<div class="catleader"><h1>'.$sortName.'</h1><div class="catleader-desc"></div></div>';
		}
		if(!empty($author_name)) {
			//作者日志显示
			echo '<div class="pagetitle"><h1>'.$author_name.' 共计发布文章'.$lognum.'篇</h1></div>';
		}
		if(!empty($keyword)) {
			//搜索
			echo '<div class="pagetitle"><h1>本次搜索帮您找到有关 <strong>'.$keyword.'</strong> 的结果'.$lognum.'条</h1></div>';
		}
		if(!empty($tag)) {
			//关键词
			echo '<div class="pagetitle"><h1>关于 <strong>'.$tag.'</strong> 的文章共有'.$lognum.'条</h1></div>';
		}?>
<div class="content-wrap">
<?php if (blog_tool_ishome()) {?>
<?php
if($Tconfig["focusslide_s"]== 1 ){
?>
<div class="oldtbcontent">
	<div id="focusslide" class="oldbanner carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#focusslide" data-slide-to="0" class="active"></li>
			<li data-target="#focusslide" data-slide-to="1"></li>
			<li data-target="#focusslide" data-slide-to="2"></li>
			<li data-target="#focusslide" data-slide-to="3"></li>
		</ol>		
		<div class="carousel-inner" role="listbox">
		
		<?php bei_hd('1,2,3,4,5,6,7.8.9,10,11,12,13,14,15,16,17,18,19,20',4);?>		
		
		</div>
			<a class="left carousel-control" href="#focusslide" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a><a class="right carousel-control" href="#focusslide" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>
	</div>
</a>
</div>
<?php }?>
<?php }?>
	<div class="content"> 
	<?php if (blog_tool_ishome()) {?>
    <div class="speedbar <?php echo $Tconfig["wow"];?>">
	<a class="tpclose" onclick="hidetp()"><i class="fa fa-times"></i></a>
	<div class="toptip" id="callboard">
	    <ul style="font-size: 14px; margin-top: 2px;">
		<?php global $CACHE;$newtws_cache = $CACHE->readCache('newtw');
            		  foreach($newtws_cache as $value):?>
            <li class="bulletin">
                <a href="<?php echo BLOG_URL.'t';?>">
                    <?php echo preg_replace("/\[F(([1-4]?[0-9])|50)\]/",'<img alt="face" src="'.TEMPLATE_URL.'img/face/$1.gif"  />',$value['t']);echo date('（Y年n月j日）',$value['date']);?>                </a>
            </li>
		<?php endforeach; ?>	
			</ul>
		
	</div>
	</div>  
	<?php if($Tconfig['gonggao']== 1 ){?>
	<?php 
	$db = MySql::getInstance();
	global $CACHE;
	$sort_cache = $CACHE->readCache('sort');
	foreach(array($Tconfig['gonggao_q']) as $key => $i){
	$sort = $sort_cache[$i];
	if($sort['pid'] != 0 || empty($sort['children'])){
	$slsortid = $i;
	}else{
	$slsortids = array_merge(array($i),$sort['children']);
	$slsortid = implode(',',$slsortids);
	}
	?>
	<?php foreach($Log_Model->getLogsForHome("and sortid IN ($slsortid) order by date desc",0,1) as $key=>$value){?>
		<article class="excerpt-minic excerpt-minic-index <?php echo $Tconfig["wow"];?>" style="display: block;">
        <div class="post-entry-categories"><?php if (Option::EMLOG_VERSION == '5.3.1'){blog_tag($value['logid']);}else{blog_tags($value['logid']);}; ?></div> 
		<h2><a class="red" href="<?php echo Url::sort($i);?>"><?php echo $sort_cache[$i]['sortname'];?></a><a href="<?php echo Url::log($value['gid']);?>" title="<?php echo $value['title'];?>"><?php echo $value['title'];?></a></h2>
		<p class="note">
			<?php echo blog_tool_purecontent(ishascomment($value['content'],$value['logid']), 158);?>
		</p>
		</article>
	<?php }?>
	<?php }?>
	<?php }?>
		<?php if($Tconfig['index_page_s']== 1 ){?>
		<section class="hot_posts <?php echo $Tconfig["wow"];?>">
		<div class="suiji">
			<h3>随机文章</h3>
			<ul class="layout_ul">
			<?php getRandLog(6);?>
			</ul>
		</div>
		<div class="hots">
			<h3>本月热门</h3>
			<ul class="layout_ul">
			<?php getdatelogs(6);?>
			</ul>
		</div>
		</section>
		<?php }?>
		<?php if($Tconfig['tool_s']== 1 ){?>
		<div class="<?php echo $Tconfig["wow"];?>">
		<?php echo $Tconfig['tool_s_html'];?>	
		</div>
		<?php }?>		
		<div class="lead-title <?php echo $Tconfig["wow"];?>">
		<div style="padding: 20px 0px 20px;width: 100%;text-align: center;">
		<font style="font-weight: 600;font-size: 20px;margin: 10px 0;overflow: hidden;">最新发布</font>
		<br/><p style="color: #999;">关注最新发布动态，紧跟行业趋势，精选优质好资源！</p>
		</div>
			<?php if($Tconfig['index_ad_ad']== 1 ){?>
			<div class="more">
				<a href="<?php echo $Tconfig['index_ad_url'];?>"><?php echo $Tconfig['index_ad_title'];?></a>
			</div>
			<?php }?>
		</div>
		<?php }?>
<?php
    if (!empty($logs)):
        foreach ($logs as $value):
   if(pic_thumb($value['content'])){
        $imgsrc = pic_thumb($value['content']);
	}elseif(getThumbnail($value['logid'])){
	    $imgsrc = getThumbnail($value['logid']);
	}else{
	    $imgsrc = TEMPLATE_URL.'static/img/random/'.substr($value['logid'],-1).'.jpg';
	}
?>
		<article class="excerpt excerpt-1 excerpt-sticky <?php echo $Tconfig["wow"];?>"><a class="focus" href="<?php echo $value['log_url']; ?>"><img data-src="<?php echo $imgsrc;?>" alt="<?php echo $value['log_title']; ?>" src="<?php echo $imgsrc;?>" class="thumb"></a>
		<div class="excerpt-post">
			<header class="">
			<?php topflg1($value['top'], $value['sortop'], isset($sortid)?$sortid:''); ?>
			<?php blog_sort($value['logid']); ?>
            <div class="post-entry-categories"><?php if (Option::EMLOG_VERSION == '5.3.1'){blog_tag($value['logid']);}else{blog_tags($value['logid']);}; ?></div>  
			<h2><a href="<?php echo $value['log_url']; ?>" title="<?php echo $value['log_title']; ?>"><?php echo $value['log_title']; ?></a></h2>
			</header>
			<p class="note">			
				<?php echo blog_tool_purecontent(ishascomment($value['content'],$value['logid']), 110);?>
			</p>
			<p class="meta">
				<span class="author"><img data-src="<?php global $CACHE;$user_cache = $CACHE->readCache('user');$uid = $value['author'];if($user_cache[$uid]['photo']['src']){echo BLOG_URL.$user_cache[$uid]['photo']['src'];}else{echo TEMPLATE_URL.'static/img/avatar.png';}?>" class="avatar avatar-50 photo" height="50" width="50" src="<?php global $CACHE;$user_cache = $CACHE->readCache('user');$uid = $value['author'];if($user_cache[$uid]['photo']['src']){echo BLOG_URL.$user_cache[$uid]['photo']['src'];}else{echo TEMPLATE_URL.'static/img/avatar.png';}?>" style="display: inline;"><?php echo index_author($value['author']); ?></span><span class="pv"><i class="fa fa-eye"></i>阅读(<?php echo $value['views'];?>)</span><a class="pc" href="<?php echo $value['log_url']; ?>#comments"><i class="fa fa-comments-o"></i>评论(<?php echo $value['comnum'];?>)</a><span class="time"><i class="fa fa-clock-o"></i><?php echo gmdate('Y-n-j', $value['date']); ?></span>
			</p>
			<?php topflg($value['top'], $value['sortop'], isset($sortid)?$sortid:''); ?>
			<?php
				$DB = MySql::getInstance();
				$str = $DB->query("SELECT * FROM `".DB_PREFIX."options` WHERE `option_value` like '%ja_praise%'");
			if($DB->num_rows($str) > 0){?>
			<p class="like">
				<a class="ja_praise btn btn-primary" data-ja_praise="<?php echo $value['logid'];?>"><i class="fa fa-thumbs-o-up"></i> 赞(<span><?php echo $value['praise'];?></span>)</a>
			</p>
			<?php }else{?>
			<?php }?>
		</div>
		</article>
		
<?php
 endforeach;
    else:
 ?>
 <div class="search-panel in" id="search-panel">
 <ul class="search-result" id="search-result">
 <li class="tips"><i class="icon icon-coffee icon-3x"></i>
 <p> 抱歉，没有符合您查询条件的结果 </p></li>
 </ul>
 </div>
<?php endif; ?>
<?php echo fly_page($lognum,$index_lognum,$page,$pageurl);?>
<?php if($Tconfig["img6g"]== 1 ){?>
           <?php if (blog_tool_ishome()) {?>		   
			<!-- 6格开始 -->
			<?php
			//CMS模块
			$cmsid = explode(',',$Tconfig['img6_id']);
			$cmsnum = count($cmsid);
			for($x = 0;$x < $cmsnum;$x++){blog_imgcmslist($cmsid[$x]);}
			?>
			<!-- 6格结束 -->
			<?php }?>
            <?php }?>
 <?php if($Tconfig["moshi"]== 2 ){?>
           <?php if (blog_tool_ishome()) {?>
			<!-- cms开始 -->
			<div class="catlist clr cat-container clearfix">
            <?php
			//CMS模块
			$cmsid = explode(',',$Tconfig['cms_id']);
			$cmsnum = count($cmsid);
			for($x = 0;$x < $cmsnum;$x++){blog_cmslist($cmsid[$x]);}
			?>
			</div>
			<!-- cms结束 -->
			<?php }?>
            <?php }?>
	</div>
</div>
<?php if (blog_tool_ishome()){include View::getView('side');}else{include View::getView('side1');}?>
</section>
</div>
<?php
include View::getView('footer');
?>