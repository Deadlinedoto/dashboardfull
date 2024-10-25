

export interface IDataUser {

  id: string
  name: string
  registeredTime: string
  role: string
  adverts: [
    {
      id: string,
      name: string,
      location: string,
      createdAt: string,
      isActive: true,
      imagesIds: [],
      cost: number
    }
  ],
}
