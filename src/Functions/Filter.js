export function handleFilter(e, data, setData) {
    let { name, value } = e.target;
    switch (name) {
      case "gender": {
        let filtdata = data.filter((e) => e.gender === value);
        setData(filtdata);
        break;
      }
      case "color": {
        let filtdata = data.filter((e) => e.color === value);
        setData(filtdata);
        break;
      }
      case "type": {
      console.log(data)
        let filtdata = data.filter((e) => e.type === value);
        setData(filtdata);
        break;
      }
      case "price": {
        let [minimum, maximum] = value.split("-").map(Number);
  
        let filtdata = data.filter((e) => e.price >= minimum && e.price <= maximum);
        filtdata.sort((a, b) => a.price - b.price);
        setData(filtdata);
        break;
      }
      default:{
          setData(data);
          break
      }
    }
  }
  