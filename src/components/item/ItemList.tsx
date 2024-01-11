import { PropType, defineComponent, reactive, ref } from "vue";
import s from "./ItemList.module.scss";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { ItemSummary } from "./ItemSummary";
import { Time } from '../../shared/time';

export const ItemList = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup(props, context) {
    const refSelected = ref('本月')
    const time = new Time()
    const customTime = reactive({
      start: new Time(),
      end: new Time()
    })
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth()
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth()
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear()
      }
    ]
    return () => (
      <MainLayout>{
        {
          title: () => '山竹记账',
          icon: () => <Icon name="menu" />,
          default: () => (
            <Tabs classPrefix='customTabs' v-model:selected={refSelected.value}>
              <Tab name="本月">
                <ItemSummary
                  startDate={timeList[0].start.format()}
                  endDate={timeList[0].end.format()} 
                />
              </Tab>
              <Tab name="上个月">
                <ItemSummary
                  startDate={timeList[1].start.format()}
                  endDate={timeList[1].end.format()} 
                />
              </Tab>
              <Tab name="今年">
                <ItemSummary
                  startDate={timeList[2].start.format()}
                  endDate={timeList[2].end.format()} 
                />
              </Tab>
              <Tab name="自定义起始时间">
                <ItemSummary
                  startDate={customTime.start.format()}
                  endDate={customTime.end.format()} 
                />
              </Tab>
            </Tabs>
          )
        }
      }</MainLayout>
    );
  }
})