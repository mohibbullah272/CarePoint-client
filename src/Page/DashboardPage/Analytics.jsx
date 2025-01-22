import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import SharedTitle from "../../Components/SharedTitle";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LoadingPage from "../loading/LoadingPage";

// Define the Analytics component
const Analytics = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    
    // Fetch user data using react-query
    const { data: userData, isFetching } = useQuery({
        queryKey: ["user analytics", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/analytic/${user?.email}`);
            return data;
        }
    });

    if (isFetching) {
        return <LoadingPage />;
    }

    // Extracting the total registrations and cost
    const totalRegistrations = userData[0].totalRegistrations;
    const totalCost = userData[0].totalCost;

    // Calculate camp registration counts
    const campRegistrations = userData[0].camps?.reduce((acc, camp) => {
        const campName = camp.camp_name;
        acc[campName] = (acc[campName] || 0) + 1;
        return acc;
    }, {});

    // Prepare chart data
    const chartData = Object.keys(campRegistrations).map(campName => ({
        campName,
        registrations: campRegistrations[campName]
    }));

    // Custom styling for the chart
    const customChartStyles = {
        bar: {
            radius: 12,  // Slightly rounded bars for a modern look
        },
        tooltip: {
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            fontSize: '14px',
        },
        legend: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#555',
        },
    };

    return (
        <div className="p-6 sm:p-10 md:p-12 rounded-xl max-w-5xl mx-auto ">
            <SharedTitle title="See Your Activity" />
            
            {/* Stats Container at the Top with DaisyUI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Total Registrations */}
                <div className="stat bg-[#0d0e0e] text-white rounded-xl p-6 sm:p-8 shadow-xl">
                    <div className="stat-title text-xl text-white/80 font-semibold">Total Registrations</div>
                    <div className="stat-value text-3xl sm:text-4xl text-white/80  font-bold">{totalRegistrations}</div>
                    <div className="stat-desc text-sm sm:text-base text-white/80 ">Registrations in different camps</div>
                </div>
                
                {/* Total Cost */}
                <div className="stat bg-[#7e9695] text-white rounded-xl p-6 sm:p-8 shadow-xl">
                    <div className="stat-title text-xl  font-semibold">Total Cost</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">${totalCost}</div>
                    <div className="stat-desc text-sm sm:text-base">Total cost for all camps</div>
                </div>
            </div>

            {/* Bar Chart for Camp Registrations */}
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="campName" tick={{ fontSize: 12, fontWeight: '500', fill: '#555' }} />
                    <YAxis tick={{ fontSize: 12, fontWeight: '500', fill: '#555' }} />
                    <Tooltip 
                        contentStyle={customChartStyles.tooltip}
                        labelStyle={{ fontWeight: 'bold', fontSize: '14px' }} 
                    />
                    <Legend wrapperStyle={customChartStyles.legend} />
                    <Bar 
                        dataKey="registrations"
                        fill="#8fb0ae" // Accent color from your theme
                        radius={customChartStyles.bar.radius}
                        animationDuration={1000} // Smooth animation for bar fill
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Analytics;
