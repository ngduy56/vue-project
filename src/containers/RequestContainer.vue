<template>
  <div class="request">
    <div class="user-list">
      <table>
        <tr>
          <th>Fullname</th>
          <th>City</th>
          <th>Wish Salary</th>
          <th>Create at</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Maria</td>
          <td>Ha Noi</td>
          <td>16.000.000 đ</td>
          <td>2022/10/04 <br />10:01</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Maria</td>
          <td>Da Nang</td>
          <td>16.000.000 đ</td>
          <td>2022/10/04 <br />10:01</td>
          <td>Abc</td>
        </tr>
        <tr>
          <td>Ernst</td>
          <td>Hue</td>
          <td>16.000.000 đ</td>
          <td>2022/10/04 <br />10:01</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Island</td>
          <td>Hue</td>
          <td>16.000.000 đ</td>
          <td>2022/10/04 <br />10:01</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.request {
  width: 100%;
  height: 100%;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    padding: 15px 10px;
    &:first-child {
      padding-left: 54px;
    }
    &:last-child {
      text-align: center;
    }
  }
  td {
    text-align: left;
    padding: 14.5px 10px;
    font-size: 14px;
    &:first-child {
      padding-left: 54px;
    }
    &:last-child {
      text-align: center;
    }
  }
  th {
    border-top: 2px solid #e4e7eb;
    border-bottom: 2px solid #e4e7eb;
  }
  tr:last-child {
    border-bottom: 2px solid #e4e7eb;
  }
}
</style>
