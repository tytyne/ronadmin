SELECT Wards.WardID,Wards.WardName,Lga.LgaName FROM Wards
INNER JOIN Lga ON Wards.Lga = Lga.Id
