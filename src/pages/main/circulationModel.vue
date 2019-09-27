<!-- parent.vue -->
<template>
  <div>
    <el-radio-group v-model="radioList">
      <el-radio :label="1">选项1</el-radio>
      <el-radio :label="2">选项2</el-radio>
      <el-radio :label="3">选项3</el-radio>
    </el-radio-group>
    <div class="">
      <el-form :model="setForm" ref="setForm" label-width="100px">
        <template v-for="(item, index) in setForm.items">
          <li>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-input v-model="item.picurl" :placeholder="'picURL'+ index"></el-input>
              </el-col>
              <el-col :span="8">
                <el-input v-model="item.value" :placeholder="'输入内容'+ index"></el-input>
              </el-col>
            </el-row>
          </li>
        </template>
      </el-form>
    </div>
    <el-button type="primary" @click="submitForm('setForm')">提交</el-button>
    <!--<childrenCirculationModel :parentMsg.sync="parentMsg"></childrenCirculationModel>-->
  </div>
</template>
<script>
  import childrenCirculationModel from '../../pages/main/childrenCirculationModel';

  export default {
    components: {
      childrenCirculationModel
    },
    data() {
      return {
        parentMsg: 'test',
        radioList: 1,
        setForm: {
          items: [{
            picurl: '',
            value: '',
          }
          ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        console.log(this.setForm);

      },
      radionLabel(val) {
        console.log(val);
      },
    },
    watch: {
      // radioList(newV, oldV) {
      //   console.log(newV, oldV);
      // },
      radioList(val) {
        let _items = [];
        for (let i = 0; i < val; i++) {
          _items.push(
            {
              picurl: '',
              value: '',
            }
          )
        }

        this.setForm.items=_items;
        console.log(this.setForm.items);

      }
    }
  }
</script>
