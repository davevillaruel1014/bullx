
export default function TokenCard(props) {

  const handleOpenCard = () => {
    props.onClickCard(props.index)
  }

  return (
	<div className="sc-jLVpRp gIhSBE">
          <div className="sc-dZpvmy ehwNXq">
              <div className="sc-jWULZn hasnrm">
                  <h4>{ `${ props.type } #${ props.index }` }</h4><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADcSURBVHgBnVILEcIwDM1QUBRQCThgDsDBkIAD5mASKgEJSNgcDAfDQWiPZHvtPmy8u9xur8nLlygBM9tgE7yZ4lOnm7eOB7TeSm+5tyfHcCNBcVZ0iRjybZLEYPmKAoTPEFRpgPj3vDq7iBjPp5jhtTpD0O+JNgCqOeyAN7QNb/nug0gjPzmthGzm6O2VZVlDskLtz64U0Tk6JCsh635t8wIlrNjig4FBuQWBK0+cQ9QnD0fmfgjcaSHTEYRqLZfji54XSCpqoe/HJoFEqIbgUN2F/kHIzN+Ltkt+H7djslFX5GLzAAAAAElFTkSuQmCC" alt="Heart" style={{cursor:"pointer"}} />
              </div>
              <img src="img/nft.gif" alt={ `${ props.type } #${ props.index }` } />
              <div className="sc-ddnlvQ fUicWg">
                  <div className="sc-jaSCiF iQTAMu" onClick={ handleOpenCard }>Open</div>
              </div>
          </div>
      </div>
		)
}