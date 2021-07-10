import React from 'react';
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneIcon from '@material-ui/icons/Tune';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon></TuneIcon>
                <h2>FILTER</h2>
            </div>
            <hr></hr>

            <ChannelRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuWCvTwr1aCiDEnxkX6CT4sI3-KCMoqISlw&usqp=CAU"
                channel="Gopi React developer"
                verified    
                subs="659k"    
                noOfvideos={382}  
                description="You find awesome programming here!Also expect programming tips and tricks that will take your coding skills to the next level"
            ></ChannelRow>
            <hr></hr>
            <VideoRow 
                views="1.5M"
                subs="657k"
                description="Do you want a good coding free training from this one"
                timestamp="2 days ago"
                channel="Gopi React developer"
                title="Let's learn react tutorial from the basics"
                image="data:image/png;base64,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"
            ></VideoRow>
            <VideoRow
          title="Python Learning Tutorial"
          subs="607k"
          description="Do you want a good coding free training from this one"
          views="2.5M Views"
          timestamp="2 days ago"
          channel="Gopi python tutorial"
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8Mnb/4tyH4swAAmb796L4fnq4EnMD4tQD0+PP+9+v/+vEmoLWbycf4uiSCvsD+9uPq9PT704Wo0M75vjQAmLe52NL//voAlrj96sX4tRP95bb84rD5vjyl0d8Am7T715D6z3n6x2Lh7ef+8tv83J/6xVb83ajS5drE3dWq09nc6eB6vc1Ep7NYrrrK4d1ptsSKwsTa6ulhsr9EqsI0pcBxucV7u7uRxs0woq9XsMb6yGn5wkqMxc+x1NTR5+r+Fb2vAAAF00lEQVR4nO2ca1fiOhSGa1MtVaiAQCGKgFwcHQVvw3iUg///X52WYhFt0sAJ3cb1Pp8GhzUrz+zdXHZ2tSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhJ/9dVY359fX5+fn09b1z99qgHpA2v0ni+uS02nc90DsY3pUkloB7g/6M/vyvWHcd191JwXTf0fDkxOJpX47pA7qOnUz821PHhwMmySxxPqAe7DaWmmt8CZ2re41hqqvtFimPTMnXiJDmoqPhIPeQNKS7F3Gano5auzj31mDfiYZmjzemD5709OnK55Xf71KPehPs4bM3G8qOKomtUnr6464n3qJKodYOC6MWPYT2ZH3+pBNExaFX0Oou0e1r9pK6Spnd0I96USmw4Xv3kQMXwyZxlv7IImfsnGbGnsv67RXNW/dhwrz55/8GJ0mRqnmGSdl5HZS410DB8Ehdj7heVdjUmGu659Wnp+VHxlGGkYXT4UzwlGmu4ATD8TsDwBxh+rY4miOcdkwy9v8dCnoSKJhnKeIah8ZhpGDyUbsb/HCjRkc80Xb/2TntU3T+iVlvgPRebjquKUDA2rDI7gXPmd+lPxUGprrzzlBMbcnsNVhsQC/aLmvwEhqFji1RwUtflJzS0WZlScJMLpm0NeZtO0NMYQbGhzbpUgsGtTkGxoc0PiQznSjcuOgyrNIKBWoFJg6Ft06yKSkVQPYbslMTwQG8IZYZ8RCH4W3MIpVnKKNL0eSeGPYEhxcZG71IRGb6E/+pruiHFbOqpdlmoGx6H83M7VdDms/wNH7aqp8lw5pZ1WEg3tO38T4qal/vojiN8DE+ZQJDlf4ia7iJJrYv0xzA0HOZu+KLbMAphWRRCm/fyFvQ0b9niTgzBWmFTrPnbFe4lglGODoQhtO1a3lPNg96JxnkMNy3BTBjC8EHM+wTV0Gnoxt1TPUkI859MS/oMXae4aNroygRttp+zoequdNGuLqNZH8+tbMH8l4t/lfpHnM7L9L4kY/4W9+sdSVM0hOdteJNt6DQfJ57iqWe/JplkYsPuTn2+kmnoOlPlbsrWLCOAFIZZWeoW31u+juSUT6s+ywoghWHGTLPsvQ9avVHNl1FgKnoUhvLVwokbL4c1xtXG/w0NpYW2uLO07Gc/XerkvlpMJIbxZW6roCt8sWHeBcWKpCfWiSaZls4A2gS7Nk98W+1Mw78vaw2gTbDzDsR9Mc0oRzNX8E3J/fRk3YkM3SiEQ805avOLvAXfX4tJfwqDmmbB/BcLy3oTTKZux9M/zZAUvfuCMsaici2ut2yLT9BZ8yc9TReV65luQZLLp7/paeqUws22r9uQnREYCnY1UVVQXJvf2pCi/Uvwps9ODGluSK1x6oO4E8Pcy1Ax6Wm6E0OfqH8vtbC/C0OylqHUC7adxJCqYyi1J2oHhnRdX6n7mh0YUj2FEY2vK4Z+Q9oG06+//kK7IWGOLjj53GGq25BaMHwWb5tr7elaDTnzaTra1plM134LVIYhZ+rw0fB7vI5geZVJI6EvNeTVfVVaA6plMBuJIVEfpW5khhQHPf3IsnRYFkM9bnWkcykXkn9JdGu2XC1g+I2AIQy/P8qGvFCrre7xf6Ah6x4GQTnpFfp5hoXl0faM/VDDVe/B8iLnxxkWkvLLIDZs07/VrMqhyuXah1cojuIL1Zk5hqL3QtYNR5++T3CRvT2Cd3vW8ZOvH8bKXboBb4zwxZCPrKqEl2z9swEESlek7zNLefmRdswbcqYSRD5bnHkHPjcuhJbk9Z41Rf7a7V7E/xnslXrIGyJ9d+Kj47I9k4/MWSqWBAqdzSuYeYLW+i9iyYgkfel+O1ptNUfWNmySWRFc8swubs58s0uopyOZJGf2hbHxSyhfvvopDfmcM9bunX7fq4mNOBoMe7X4Niki+kNhVr0smzh/SgjKrbPLYbXaHV6etgwq4AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYJ3/AJ1pjzvOYn0zAAAAAElFTkSuQmCC"
        ></VideoRow>
        <VideoRow
          title="HTML&CSS Learning Tutorial"
          subs="637k"
          description="Do you want a good coding free training from this one"
          views="2.1M Views"
          timestamp="2 days ago"
          channel="Gopi html&css tutorial"
          image="data:image/png;base64,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"
        ></VideoRow>
        </div>
    )
}

export default SearchPage