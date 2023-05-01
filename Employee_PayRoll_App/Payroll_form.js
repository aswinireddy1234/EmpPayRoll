const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputvalueById('#name');
    } catch (e){
        setTextValue('.text-erroe',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputvalueById('#salary');
    employeePayrollData.note = getInputvalueById('#notes');
    let date = getInputvalueById('#day')+" "+getInputvalueById('#month')+" "+getInputvalueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
    }

    const getSelectedValues = (propertyValue) => {
        let allItems = document.querySelector(propertyValue);
        let selItems = [];
        allItems.forEach(item => {
            if(item.checked) selItems.push(item.value);
        });
        return selItems;
        }

        const getInputvalueById = (id) => {
            let value = document.querySelector(id).value;
            return value;
        }

        const getInputElementValue = (id) => {
            let value = document.getElementById(id).value;
            return value;
        }
    
const salary = document.querySelector('salary-output');
const salRange = document.querySelector('#salary');
const username = document.querySelector('#name');
const nameError = document.querySelector('#errormsg');
const notes = document.querySelector('#notes');
let departmentValues = [];
let employeePayrollList = [];

username.addEventListener('input', () => {
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (nameRegex.test(username.value)) {
    username.style.border = '2px solid green';
    nameError.style.visibility = 'hidden';
  } else {
    nameError.style.visibility = 'visible';
    username.style.border = 'none';
  }
});
salRange.addEventListener('input', () => {
  salary.innerHTML = salRange.value;
});

function save() {
    const profileImage = document.querySelector('input[name="profile"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');
    const checkbox = document.querySelectorAll('input[class="checkbox"]:checked');
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    let startDate = day.value + '-' + month.value + '-' + year.value;
    checkbox.forEach((dept) => {
      departmentValues.push(dept.value);
    });
  
    window.alert(
      username.value +',' +salRange.value +',' +profileImage.value +',' +gender.value +',' +
        departmentValues +',' +startDate +',' +notes.value);

if (window.localStorage.key(1) !== null) {
    employeePayrollList = JSON.parse(
      window.localStorage.getItem('employeePayrollData')
    );
  }

  let newEmployee = {
    name: username.value,
    profileImg: profileImage.value,
    gender: gender.value,
    department: departmentValues,
    salary: salRange.value,
    startDate: startDate,
    notes: notes.value,
  };

  employeePayrollList.push(newEmployee);

  window.alert(employeePayrollList);

  window.localStorage.setItem('employeePayrollData',JSON.stringify(employeePayrollList));
}
