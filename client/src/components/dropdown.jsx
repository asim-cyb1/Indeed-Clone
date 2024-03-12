import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const Dropdown = ({
    id,
    value,
    handleChange,
    name,
    label,
    options,
    ...props
}) => {
    return (
        <FormControl>
            <InputLabel id={id}>{label}</InputLabel>
            <Select labelId={id} id={id} value={value} label={label} onChange={handleChange} name={name} {...props} >
                {
                options.map(option => ( <MenuItem value={option}>{option}</MenuItem>))
                }
            </Select>
        </FormControl>
    )
}

export default Dropdown