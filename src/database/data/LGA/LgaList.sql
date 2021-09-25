select Lga.LgaName,States.Statename,Lga.Created
from Lga
INNER JOIN States
 ON Lga.State=States.StateID
