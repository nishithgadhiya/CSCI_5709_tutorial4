# Tutorial4

* *Date Created*: 04 Mar 2023
* *Last Modification Date*: 04 Mar 2023
* *Git URL*: <https://git.cs.dal.ca/ngadhiya/csci-5709-tutorials.git>
* *Netlify deployed URL*: <https://ngadhiya-tutorial4.netlify.app/>
* *Github URL*: <https://github.com/suijaa/CSCI_5709_tutorial4.git>

## Author

* [Nishith Vithaldas Gadhiya](nishith.gadhiya@dal.ca) - *(developer)*

### Tutorial4 run steps using cmd in local

```
    git clone https://git.cs.dal.ca/ngadhiya/csci-5709-tutorials.git
```
```
    cd csci-5709-tutorials/Tutorial4
```
```
    npm install
```
```
    npm start
```

## Sources Used

### 1: Tutorial4/src/components/DisplayUser.js

*Lines 72 - 90*

```

The code above was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-table/) as shown below: 


```
*reference code:*
  ```  
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
``` 
    
*mycode:*
``` 
           <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {userData ? (
                Object.keys(userData).map((key) => (
                  <TableRow>
                    <Card
                      key={key}
                      keyData={key}
                      details={userData[key].toString()}
                    />
                  </TableRow>
                ))
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
        </TableContainer>
``` 
- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-table/) was implemented by...
``` MaterialUI demostrats how to display data on table```

- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-table/)'s Code was used because...
``` I wanted to display data in table``` 
  
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-table/)'s Code was modified by...
``` Used my nested components and resuable used dynamic data and styles``` 

