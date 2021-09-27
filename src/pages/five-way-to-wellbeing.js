function FiveWellbeing() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="p-3 text-left">How often do you</th>
                    <th className="p-3 font-light">Never</th>
                    <th className="p-3 font-light">Once a month</th>
                    <th className="p-3 font-light">Once a week</th>
                    <th className="p-3 font-light">Most days</th>
                    <th className="p-3 font-light">Everyday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-3 m-w-[400px]">Pay attention to your feeling and emotions</td>
                    <td className="p-3 text-center"><input type="radio" name="question1" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question1" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question1" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question1" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question1" className="cursor-pointer"/></td>
                </tr>
                <tr>
                    <td className="p-3">Talk with friends either in person or via social media</td>
                    <td className="p-3 text-center"><input type="radio" name="question2" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question2" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question2" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question2" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question2" className="cursor-pointer"/></td>
                </tr>
                <tr>
                    <td className="p-3">Spend time doing a hobby you like</td>
                    <td className="p-3 text-center"><input type="radio" name="question3" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question3" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question3" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question3" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question3" className="cursor-pointer"/></td>
                </tr>
                <tr>
                    <td className="p-3">Play sports in a team, like football or netball</td>
                    <td className="p-3 text-center"><input type="radio" name="question4" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question4" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question4" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question4" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question4" className="cursor-pointer"/></td>
                </tr>
                <tr>
                    <td className="p-3 max-w-35">Volunteer or help in your community, including helping neighbours or friends</td>
                    <td className="p-3 text-center"><input type="radio" name="question5" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question5" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question5" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question5" className="cursor-pointer"/></td>
                    <td className="p-3 text-center"><input type="radio" name="question5" className="cursor-pointer"/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default FiveWellbeing;