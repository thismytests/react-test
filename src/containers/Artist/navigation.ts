import React from 'react'

export interface NavigationContextType{
  getArtistUrlValue: Function;
}
export const NavigationContext = React.createContext<NavigationContextType>({
  getArtistUrlValue: () => {throw new Error('Must be emplemented')}
})

export const NavigationProvider = NavigationContext.Provider;
export default NavigationContext;

