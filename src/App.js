import data from './data'


const App = () => {
  const headers = [
    "Phone Number",
    "Task",
    "Speaker",
    "Instruction"
  ]

  const header = headers.map( heading => (
    <th
      key={heading}
    >
      {heading}
    </th>
  ))

  const content = data.map( dataObject => {
    const {phone_number,task_id,speaker_id,instruction} = dataObject

    return (
      <tr
        key={task_id}
      >
        <td>{phone_number}</td>
        <td>{task_id}</td>
        <td>{speaker_id}</td>
        <td>{instruction}</td>
      </tr>
    )
  })

  const grid = (
    <table>
      <thead><tr>{header}</tr></thead>
      <tbody>{content}</tbody>
    </table>
  )


  const copyCSVToClipboard = () => {
    // Comma separated values
    /**
     * Head1,head2
     * content1,content 2
     */

    let CSV = ""

    headers.forEach( header => CSV += `,${header}`)
    CSV = CSV.slice(1)

    data.forEach(dataObject => {
      // { 
      // phone_number: "+49 1234 567 888",
      // task_id:      0,
      // speaker_id:   123,
      // instruction:  "Do the right stuff"
      // }

      CSV += "\n"
      let line = ""
      // WARNING: The following line assumes that each
      // object has the same properties in the same
      // order.
      const values = Object.values(dataObject)
      values.forEach( value => line += `,${value}`)
      line = line.slice(1)
      CSV += line
    })


    // console.log(`"${CSV}"`);
    
    navigator.clipboard.writeText(CSV)
  }
   

  return <>
    {grid}
    <button
      onClick={copyCSVToClipboard}
    >
      Copy CSV to clipboard
    </button>
  </>
}

export default App