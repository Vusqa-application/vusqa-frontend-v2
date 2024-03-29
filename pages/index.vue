<template>
<div class="front-page">
  <component :is="view.template">
    <header-section slot="header"></header-section>
    <div class="ads-row"
      slot="ad-section1"
    >
      <ad-block
        v-for="i in 1"
        :key="i"
        :width="'100%'"
        :height="'108px'"
      >
      </ad-block>
    </div>
    <headline-news-section 
      :slot="view.headline_slot"
    >
      <trending-keywords-section 
        :slot="view.keywords_slot"
      ></trending-keywords-section>
    </headline-news-section>
    <divider slot="top-section"></divider>
    
    <popular-news-section slot="middle-section"></popular-news-section>
    <div class="ads-row"
      slot="ad-section2"
    >
      <ad-block
        v-for="i in 2"
        :key="i"
      >
      </ad-block>
    </div>
    <divider slot="middle-section"></divider>
    <video-section slot="bottom-section"></video-section>
    <login-card slot="top-aside"></login-card>
    <div class="ads-column" slot="bottom-aside">
      <ad-block
        v-for="i in 3"
        :key="i"
        :height="'300px'"
      >
      </ad-block>
    </div>

    <!-- Post Reading Mode -->
    <div class="post-section" slot="news-post-section">
      <news-post-section></news-post-section>
      <comment-section></comment-section>
    </div>
  </component>
</div>

</template>

<script>
// ----------- TEMPLATE PATH
import VusqaNewsTemplate from '@/components/templates/vusqa_news/vusqa_news_template.vue';
import VusqaNewsPostTemplate from '@/components/templates/vusqa_news/vusqa_news_post_template.vue';
import { mapState } from 'vuex';


// ----------- SECTION PATH
const layout_section_path = component_name => import(`@/components/sections/layout/${component_name}.vue`);
const content_section_path = component_name => import(`@/components/sections/content/${component_name}.vue`);
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);

export default {
  components: {
    // TEMPLATE
    VusqaNewsTemplate,
    VusqaNewsPostTemplate,

    // Layout Sections
    HeaderSection: () => layout_section_path('header_section'),

    // Content Sections
    HeadlineNewsSection: () => content_section_path('headline_news_section'),
    PopularNewsSection: () => content_section_path('popular_news_section'),
    VideoSection: () => content_section_path('video_section'),
    NewsPostSection: () => content_section_path('news_post_section'),
    CommentSection: () => content_section_path('comment_section'),
    TrendingKeywordsSection: () => content_section_path('trending_keywords_section'),

    // EXTRA BLOCKS
    AdBlock: () => block_path('ad_block'),
    LoginCard: () => block_path('login_card'),


    // EXTRA ATOMS
    Divider: () => atom_path('divider')
  },
  computed: {
    ...mapState('layout', {
      reading_mode: state => state.front_page.reading_mode
    }),
    view () {
      return {
        template: this.reading_mode ? 'vusqa-news-post-template' : 'vusqa-news-template',
        headline_slot: this.reading_mode ? 'news-item-section' : 'top-section',
        keywords_slot: this.reading_mode ? 'bottom-row' : 'right-column'
      }
    }
  }
}
</script>

<style lang="scss">

.front-page {
  max-width: 1072px;
  margin: auto;

  .header-section {
    margin-top: 36px;
  }

  .headline-news-section {
    margin-top: 16px;
  }

  .ads-row {
    padding-right: 8px;
    display: flex;
    :not(:last-child) {
      margin-right: 20px;
    }
  }

  .ads-column {
    margin-top: 16px;
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }

  .post-section {
    @include border-left;
    padding: 0px 8px 0px 0px;
  }

}




</style>