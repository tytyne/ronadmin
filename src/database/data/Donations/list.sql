
SELECT Users.LastName,Users.FirstName,Donations.Amount,DonationType.DonationType,Donations.Narration,Donations.CreatedDate
FROM Donations
INNER JOIN Users ON Donations.CreatedBy = Users.Id
INNER JOIN DonationType ON Donations.DonationType = DonationType.Id
