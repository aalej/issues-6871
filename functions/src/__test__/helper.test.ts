import {getClientId} from "../helper";

it("should return clientId", () => {
  // Arrange
  const expectedClientId = "ClientId123";

  // Act
  const actualClientId = getClientId();

  // Assert
  expect(actualClientId).toEqual(expectedClientId);
});
