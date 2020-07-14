<script>
console.log(123)

</script>

# I4 VSP

# 工艺

## 什么是工艺
工艺是利用各种生产工具对原材料或半成品按照设计预期的产品要求进行加工及处理的方法和过程。工艺直接关系到产品制造方案的设计、生产路线的确立、原材料的选择、生产装备的配置、产品质量的检测、产品的包装、运输等诸多环节，是建立生产制造系统的基础。

## 工艺流程
工艺流程亦称“加工流程”或“生产流程”。指通过一定的生产设备或管道，从原材料投入到成品产出，按顺序连续进行加工的全过程。工艺流程是由工业企业的生产技术条件和产品的生产技术特点决定的。
一个完整的工艺流程，通常包括若干道工序。如镶贴砖石工程中，一般要经过拌合砂浆、砖块浸水、打底、贴砖、平缝、表面清扫等工艺过程。可见，工艺流程的基本内容，就是工人利用劳动工具，改变劳动对象的形状、大小、位置、成分、性能等，使其成为预期产品。

## 工艺路线

### 1.概念
工艺路线是说明零部件加工或装配过程的文件。包括：零部件加工和装配的工序顺序、每道工序使用的工作中心、各项时间定额，以及外协工序的时间和费用。简单的说就是这个产品的加工过程或步骤.

### 2.作用

- 用于计算BOM 表中物料的提前期；
- 用于计算占用工作中心的负荷数，提供运行能力需求计划的数据；
- 用于下达车间作业计划；
- 用于加工成本的计算；
- 用于跟踪在制品。

### 设备

#### 工艺放行

- 哪些产品在哪些设备下生产

#### 节拍设置

#### 换型矩阵设置

#### 目标值设置

## 遇到的问题
::: warning
- 1.接口定义不完整
- 2.需求开发的途中发生变动
:::

设备综合效率，Overall Equipment Effectiveness，简称OEE。

OEE = 时间可动率 * 性能可动率 * 合格品率

OEE=合格品数量*生产节拍/计划生产时间 (注：效率计算公式同OEE)

时间可动率 = 运行时间 / 计划生产时间

性能可动率 = 理论生产时间/运行时间 (注：理论生产时间=(合格品数量+报废品数量)*生产节拍)

合格品率 = 合格品数量/(合格品数量+报废品数量)