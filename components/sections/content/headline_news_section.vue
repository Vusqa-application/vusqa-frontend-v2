<template>
<div class="headline-news-section">
  <div class="trending-info">
    <div class="trending-news">
      <section-navigation>
        <simple-dot slot="indicators"></simple-dot>
        <simple-dot slot="indicators"></simple-dot>
        <simple-dot slot="indicators"></simple-dot>
        <slider-buttons slot="slider-buttons">
          1 ~ 20
        </slider-buttons>
      </section-navigation>
      <headline-image>
        <play-button slot="button"></play-button>
      </headline-image>
      <text-block-list
        :click_event="changePageMode"
        :event_parameter="text_block_event_parameter"
      ></text-block-list>
      <div class="news-block-list">
        <text-block-with-image
          v-for="i in 3"
          :key="i"
        >
        </text-block-with-image>
      </div>
    </div>
    <slot name="right-column"></slot>
  </div>
  <slot name="bottom-row"></slot>
</div>
</template>

<script>
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      text_block_event_parameter: {
        page: 'front_page',
        target: 'reading_mode',
        data: true
      }
    }
  },
  components: {
    // ATOMS
    PlayButton: () => atom_path('play_button'),
    IndicatorBox: () => atom_path('indicator_box'),
    SliderButtons: () => atom_path('slider_buttons'),
    SimpleDot: () => atom_path('simple_dot'),

    // BLOCKS
    HeadlineImage: () => block_path('headline_image'),
    SectionNavigation: () => block_path('section_navigation'),
    TextBlockWithImage: () => block_path('text_block_with_image'),
    TextBlockList: () => block_path('text_block_list')
  },
  methods: {
    ...mapMutations('layout', [
      'changePageMode'
    ])
  }
}
</script>

<style lang="scss" scoped>

.headline-news-section {
  display: flex;
  flex-direction: column;
  
  .trending-info {
    display: flex;
    flex-direction: row;
    margin-bottom: 28px;
    
    .trending-news {
      display: flex;
      flex-direction: column;
      padding-right: 10px;
      margin-bottom: 20px;

      
      .section-navigation {
        margin-bottom: 16px;
      }

      .headline-image {
        margin-bottom: 20px;
      }

      .text-block-list {
        margin-bottom: 20px;
      }

      .news-block-list {
        display: flex;
        :not(:last-child) {
          margin-right: 20px;
        }
      }

    }

  }

}


</style>