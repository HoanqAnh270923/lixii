const quizData = [
    {
        id: 1,
        question: "Mô tả nào về quá trình Site survey là sai?",
        answers: [
            "a. Khảo sát để tìm vị trí tối ưu đặt các Access Point và những máy trạm không dây",
            "b. Sau khi tìm ra vị trí tối ưu cho các Access Point, bước tiếp theo tiếp tục khảo sát để tìm vị trí đặt máy tính cho nhân viên và các thiết bị không dây khác",
            "c. Thử đặt Access Point tại các vị trí dự kiến, sau đó đo cường độ tín hiệu tại tất cả mọi nơi để tìm ra những điểm không có tín hiệu hoặc tín hiệu bị yếu",
            "d. Khảo sát để tìm vị trí tối ưu đặt Access Point"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        question: "Hình sau mô tả vấn đề nào của môi trường truyền không dây?",
        answers: [
            "a. Exposed station problem (Trạm lộ)",
            "b. Roaming (Chuyển vùng)",
            "c. Hidden station problem (Trạm ẩn)",
            "d. Vấn đề khi thực hiện Site survey"
        ],
        correctIndex: 0
    },
    {
        id: 3,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Chuẩn 802.11n ra đời sau chuẩn 802.11g và có tốc độ truyền cao hơn",
            "b. Công nghệ SU-MIMO cho phép Access Point giao tiếp đồng thời với nhiều máy trạm",
            "c. Chuẩn 802.11n sử dụng tần số 2,4 GHz hoặc 5GHz",
            "d. Công nghệ MIMO cho phép dùng nhiều ăng ten thu và ăng ten phát để truyền đồng thời nhiều luồng dữ liệu"
        ],
        correctIndex: 1
    },
    {
        id: 4,
        question: "Mô tả nào về giải pháp kết nối không dây đã được áp dụng trong hình (Customer Application Example) là sai?",
        answers: [
            "a. Là giải pháp hỗn hợp áp dụng cả kết nối hữu tuyến và vô tuyển. Vì vướng đường ô tô nên phải lắp thiết bị thu phát không dây EZ-Bridge LT2 cho tòa nhà A và H1, còn những tòa nhà còn lại (H2, B,C) được nối với tòa nhà chính H1 bằng cáp UTP Cat 5",
            "b. Vì vướng đường ô tô nên phải lắp thiết bị thu phát không dây EZ-Bridge LT2 cho tòa nhà A và H1",
            "c. Nhà H1 lắp hai loại thiết bị thu phát không dây: EZ-GO2 và EZ-Bridge LT2",
            "d. Lắp thiết bị thu phát không dây EZ-GO2 cho các tòa nhà H2, B, C để kết nối với H1"
        ],
        correctIndex: 0
    },
    {
        id: 5,
        question: "Những trường hợp thực tế nào không phù hợp để áp dụng môi trường truyền Bluetooth?",
        answers: [
            "a. Gửi các mẫu quảng cáo nhỏ từ các pa-nô quảng cáo tới các thiết bị cầm tay của người qua đường",
            "b. Giao tiếp giữa các thiết bị đo, thiết bị định vị dùng GPS, thiết bị y tế, máy quét mã vạch, và các thiết bị điều khiển giao thông",
            "c. Kết nối với các thiết bị điều khiển từ xa dành cho thiết bị điện tử gia dụng, ví dụ như thiết bị điều khiển từ xa của tivi",
            "d. Cung cấp Internet làm việc hàng ngày cho Desktop PC"
        ],
        correctIndex: 3
    },
    {
        id: 6,
        question: "Mô tả nào về chuẩn 802.11ax là sai?",
        answers: [
            "a. Áp dụng công nghệ MU-MIMO nâng cấp, cho phép 8 luồng cho cả chiều upload và download",
            "b. Ra đời sau 802.11ac",
            "c. Còn gọi là chuẩn WiFi 6 (Wifi thế hệ 6)",
            "d. Thông lượng tối đa 4Gbps"
        ],
        correctIndex: 3
    },
    {
        id: 7,
        question: "Mô tả nào về dải tần số ISM là sai?",
        answers: [
            "a. Thiết bị sử dụng tần số ISM phải chấp nhận có thể bị nhiễu từ thiết bị được cơ quan quản lý cho phép hoạt động",
            "b. Ví dụ về thiết bị sử dụng dải tần ISM là điện thoại cố định không dây sử dụng trong phạm vi gia đình",
            "c. Thiết bị sử dụng tần số ISM có quyền khởi kiện nếu bị nhiễu từ những thiết bị khác",
            "d. Người sử dụng không phải xin giấy phép sử dụng tần số do Cục tần số vô tuyến điện cấp"
        ],
        correctIndex: 2
    },
    {
        id: 8,
        question: "Mô tả nào về hình thức truyền qua vệ tinh địa tĩnh là sai?",
        answers: [
            "a. Thời gian truyền từ trạm phát tới trạm thu không phụ thuộc vào vị trí của hai trạm này",
            "b. Khoảng cách từ vệ tinh tới trạm phát và trạm thu là rất lớn so với khoảng cách giữa hai trạm",
            "c. Thời gian truyền từ trạm phát tới trạm thu là hằng số vì vị trí của trạm phát là không thay đổi",
            "d. Vệ tinh đứng yên so với mặt đất"
        ],
        correctIndex: 0
    },
    {
        id: 9,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Chuẩn 802.11g là sự kết hợp các thông số kỹ thuật của hai chuẩn a và b trước đó",
            "b. Công nghệ MIMO dùng nhiều ăng-ten thu phát làm tăng tính ổn định của đường truyền, giúp khả năng chịu nhiễu tốt hơn",
            "c. Tần số 5 GHz thường bị can nhiễu bởi các thiết bị điện tử gia dụng",
            "d. Công nghệ MIMO dùng nhiều ăng-ten thu phát giúp vùng phủ sóng rộng hơn, khắc phục các vật cản"
        ],
        correctIndex: 2
    },
    {
        id: 10,
        question: "Mệnh đề nào mô tả sai về vấn đề Trạm lộ?",
        answers: [
            "a. Sóng vô tuyến của B không cản trở việc thu tín hiệu của D",
            "b. Vì hiểu nhầm là đường truyền bận nên C không phát tin tới D",
            "c. Việc B truyền tin cho A không ảnh hưởng tới việc C phát tin cho D",
            "d. Trong khi C đang phát tới D thì B bắt đầu muốn truyền cho A"
        ],
        correctIndex: 1
    },
    {
        id: 11,
        question: "Sau khi máy bay rơi, hộp đen phát tín hiệu bằng sóng tần số thấp vì lý do gì?",
        answers: [
            "a. Tín hiệu có khả năng vượt qua vật cản",
            "b. Người dân ở gần đó có thể thu được tín hiệu qua radio",
            "c. Đạt được thông lượng cao",
            "d. Đạt được băng thông rộng"
        ],
        correctIndex: 0
    },
    {
        id: 12,
        question: "Kiến trúc 802.11 tập trung vào 2 tầng nào của mô hình mạng OSI?",
        answers: [
            "a. Tầng Datalink và tầng Transport",
            "b. Tầng Vật lý và tầng Network",
            "c. Tầng Liên kết dữ liệu và tầng Giao vận",
            "d. Tầng Vật lý và tầng con Truy cập đường truyền (MAC) của tầng Datalink"
        ],
        correctIndex: 3
    },
    {
        id: 13,
        question: "Những tín hiệu hoặc ứng dụng nào sau đây không sử dụng sóng vô tuyến tần số thấp, dưới 30 MHz?",
        answers: [
            "a. Hệ thống mạng 4G",
            "b. Tín hiệu được phản xạ bởi tầng điện ly để vượt khoảng cách hàng ngàn km",
            "c. Tín hiệu phát đi từ hộp đen máy bay",
            "d. Truyền tín hiệu vì mục đích cấp cứu, tìm kiếm cứu nạn trên biển"
        ],
        correctIndex: 0
    },
    {
        id: 14,
        question: "Hình sau mô tả vấn đề nào của môi trường truyền không dây?",
        answers: [
            "a. Trạm ẩn",
            "b. Trạm lộ",
            "c. Vấn đề khi thực hiện khảo sát mạng",
            "d. Chuyển vùng"
        ],
        correctIndex: 1
    },
    {
        id: 15,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Tín hiệu Infrared dễ dàng xuyên hoặc vòng qua các vật cản",
            "b. Công nghệ MIMO dùng nhiều ăng-ten thu phát làm tăng tính ổn định của đường truyền, giúp khả năng chịu nhiễu tốt hơn",
            "c. Chuẩn 802.11g là sự kết hợp các thông số kỹ thuật của hai chuẩn a và b trước đó",
            "d. Công nghệ MIMO dùng nhiều ăng-ten thu phát giúp vùng phủ sóng rộng hơn, khắc phục các vật cản"
        ],
        correctIndex: 0
    },
    {
        id: 16,
        question: "Mệnh đề nào mô tả sai về vấn đề Trạm lộ?",
        answers: [
            "a. Việc C phát tin cho D, nếu diễn ra, sẽ không ảnh hưởng tới việc B truyền cho A",
            "b. Vùng phủ sóng của B không chứa D, vì vậy tín hiệu của B không thể gây ra xung đột tại D",
            "c. Sóng vô tuyến từ B cản trở việc thu tin hiệu của D, khiến cho tín hiệu từ C bị xung đột",
            "d. Tín hiệu của B sẽ không gây ra xung đột tại D"
        ],
        correctIndex: 2
    },
    {
        id: 17,
        question: "Chuẩn Wifi nào có thông lượng là 11Mbps, được ban hành gần như đồng thời với chuẩn 802.11a nhưng tốc độ truyền thấp hơn?",
        answers: [
            "a. 802.11 gốc",
            "b. 802.11a",
            "c. 802.11b",
            "d. 802.11g"
        ],
        correctIndex: 2
    },
    {
        id: 18,
        question: "Mô tả nào về những vấn đề của môi trường truyền không dây là sai?",
        answers: [
            "a. Tuy phạm vi phủ sóng Wifi là ba chiều nhưng khi triển khai trong tòa nhà văn phòng thì chỉ còn 2 chiều, hơn nữa tín hiệu bị che bởi các vật cản cố định và không cố định",
            "b. Dù đã được Site survey kỹ càng, khi vận hành hiệu năng thật sự của WLAN vẫn không ổn định vì tuy AP cố định nhưng vị trí và tình trạng hoạt động của các máy trạm và các thiết bị phát sóng gây nhiễu thì biến đổi",
            "c. Vùng phủ sóng của AP càng lớn thì số lượng máy trạm kết nối vào càng nhiều, dẫn đến băng thông dành cho mỗi máy trạm càng nhiều",
            "d. Các AP ở cạnh nhau có thể gây nhiễu lẫn nhau nếu hoạt động ở dải tần số gần nhau"
        ],
        correctIndex: 2
    },
    {
        id: 19,
        question: "Sóng radio thường không được sử dụng theo phương thức truyền nào?",
        answers: [
            "a. Broadcast",
            "b. Quảng bá",
            "c. Bao trùm",
            "d. Point to point"
        ],
        correctIndex: 3
    },
    {
        id: 20,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Công nghệ MIMO của chuẩn 802.11g cho phép dùng nhiều ăng ten để Access Point có thể giao tiếp cùng lúc với nhiều máy trạm, làm giảm thời gian chờ",
            "b. Chuẩn 802.11n sử dụng tần số 2,4 GHz hoặc 5GHz",
            "c. Công nghệ MIMO cho phép dùng nhiều ăng ten thu và ăng ten phát để truyền đồng thời nhiều luồng dữ liệu",
            "d. Công nghệ MIMO bắt đầu xuất hiện từ chuẩn 802.11n"
        ],
        correctIndex: 0
    },
    {
        id: 21,
        question: "Mô tả nào về công nghệ truyền Beamforming là sai?",
        answers: [
            "a. Công nghệ truyền Beamforming được triển khai bắt đầu từ chuẩn 802.11ac",
            "b. Công nghệ truyền Beamforming truyền dữ liệu với tốc độ không đổi, không phụ thuộc vào khoảng cách tới trạm thu",
            "c. Với Beamforming trạm thu phát (Access Point) có thể bám theo hưởng của trạm thu khi nó di chuyển",
            "d. Mục đích của beamforming là giảm nhiễu và hỗ trợ công nghệ truyền đa luồng MU-MIMO"
        ],
        correctIndex: 1
    },
    {
        id: 22,
        question: "Sau khi lắp đặt mạng không dây ở trường hợp trong hình (Customer Application Example), cáp mạng sẽ được sử dụng ở đâu?",
        answers: [
            "a. Trong nội bộ các tòa nhà",
            "b. Không ở đâu cả",
            "c. Cáp mạng sẽ được dùng để kết nối H1 với các tòa nhà còn lại, trừ nhà A",
            "d. Cáp mạng sẽ được dùng kết nối H1 với H2"
        ],
        correctIndex: 0
    },
    {
        id: 23,
        question: "Access Point trong hình (trên trang 6) hoạt động ở chế độ nào?",
        answers: [
            "a. Root mode",
            "b. Router mode",
            "c. Bridge mode",
            "d. Repeater mode"
        ],
        correctIndex: 0
    },
    {
        id: 24,
        question: "Trường hợp thực tế nào trong đó kết nối mạng bằng đường truyền hữu tuyến hiệu quả hơn so với đường truyền vô tuyến?",
        answers: [
            "a. Nối mạng cho người dùng đang ở trên các phương tiện giao thông",
            "b. Kết nối hai máy tính cách nhau bởi một xa lộ",
            "c. Cung cấp mạng cho các văn phòng, công sở với các vị trí đặt Desktop PC cố định",
            "d. Cung cấp mạng cho khu vực bị thiên tai, chiến tranh"
        ],
        correctIndex: 2
    },
    {
        id: 25,
        question: "Giao thức bảo mật Wifi tốt nhất và được sử dụng rộng rãi nhất trên các thiết bị Wifi hiện nay là ...",
        answers: [
            "a. AES",
            "b. Open WiFi network",
            "c. WEP",
            "d. WPA3"
        ],
        correctIndex: 3
    },
    {
        id: 26,
        question: "Access Point 1 trong hình (trên trang 7) hoạt động ở chế độ nào?",
        answers: [
            "a. Access Point mode",
            "b. Repeater mode",
            "c. Bridge mode",
            "d. Root mode"
        ],
        correctIndex: 2
    },
    {
        id: 27,
        question: "Trường hợp thực tế nào trong đó kết nối mạng bằng đường truyền hữu tuyến hiệu quả hơn so với đường truyền vô tuyến?",
        answers: [
            "a. Khi lắp mạng LAN cho một công sở đặt tại vị trí gần nguồn nhiễu điện từ lớn, chẳng hạn như cột BTS",
            "b. Cung cấp mạng cho các công trình kiến trúc cổ, hạn chế sửa chữa động chạm",
            "c. Cung cấp mạng cho vùng núi non, hải đảo",
            "d. Cung cấp kết nối mạng tạm thời trong thời gian ngắn"
        ],
        correctIndex: 0
    },
    {
        id: 28,
        question: "Mô tả nào về việc quản lý và sử dụng các tần số vô tuyến là sai?",
        answers: [
            "a. Việc lắp đặt các hệ thống Viba vệ tinh luôn phải có giấy phép sử dụng vì tần số nằm trong miền tần số được quản lý",
            "b. Bất kỳ ai cũng có thể mua và sử dụng những thiết bị thu phát sóng vô tuyến hoạt động ngoài dải tần số ISM mà không cần làm thủ tục đăng ký sử dụng",
            "c. Tần số vô tuyến cũng là một tài nguyên quốc gia. Giấy phép sử dụng một tần số vô tuyến do Cục tần số vô tuyến điện cấp ghi rõ phạm vi địa lý được phép sử dụng dải tần số đó",
            "d. Dù đã trả tiền thuê trước đầy đủ nhưng nếu không sử dụng hoặc sử dụng không đúng mục đích đã đăng ký thì nhà cung cấp dịch vụ mạng vẫn sẽ bị thu hồi giấy phép sử dụng tần số vô tuyến"
        ],
        correctIndex: 1
    },
    {
        id: 29,
        question: "Mô tả nào về tên gọi, chức năng và hoạt động của Access Point là sai?",
        answers: [
            "a. Hoạt động ở chế độ song công (full-duplex) như switch",
            "b. Đôi khi AP còn được gọi một cách không chính xác là Điểm truy cập không dây hay Router không dây",
            "c. Số lượng và vị trí lắp đặt AP cần tính dựa trên số máy trạm đồng thời hòa mạng (số kết nối) và nhu cầu sử dụng mạng của người dùng trong cơ quan",
            "d. Loại AP hỗ trợ 2 băng tần (2,4GHz và 5 GHz) có thể phục vụ được nhiều máy trạm hơn so với loại chỉ hoạt động ở một băng tần (2,4GHz hoặc 5 GHz)"
        ],
        correctIndex: 0
    },
    {
        id: 30,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Tần số 5 GHz ít bị can nhiễu bởi các thiết bị điện tử gia dụng",
            "b. Tín hiệu Infrared dễ bị chặn bởi các vật cản",
            "c. Chuẩn 802.11g là sự kết hợp các thông số kỹ thuật của hai chuẩn a và b trước đó",
            "d. Chuẩn 802.11n không tương thích với chuẩn 802.11g trước đó"
        ],
        correctIndex: 3
    },
    {
        id: 31,
        question: "Mô tả nào về những vấn đề của môi trường truyền không dây là sai?",
        answers: [
            "a. Đặt cấu hình AP để vùng phủ sóng hẹp sẽ khắc phục tình trạng thiếu cổng kết nối để phục vụ máy trạm, đồng thời làm tăng băng thông dành cho máy trạm",
            "b. Khi các cell chồng lên nhau, các AP láng giềng không thể dùng cùng tần số nếu không sẽ gây nhiễu lẫn nhau",
            "c. Các mạng LAN không dây ở vị trí cạnh nhau, cùng thuộc một cơ quan nhưng phục vụ các bộ phận phòng ban khác nhau thì phải được gắn Tên SSID (Service Set Identifier) giống nhau",
            "d. Mỗi máy trạm chỉ kết nối với 1 Access Point tại mỗi thời điểm"
        ],
        correctIndex: 2
    },
    {
        id: 32,
        question: "Đâu không phải là mặt trái hay nhược điểm của mạng không dây?",
        answers: [
            "a. Trong một số trường hợp có thể gây hại cho sức khỏe người dùng",
            "b. Phù hợp với các triển lãm ngắn ngày, các khu vực vừa bị ảnh hưởng bởi thiên tai",
            "c. Cường độ tín hiệu bị hạn chế bởi tường, sàn nhà và các vật cản",
            "d. Tín hiệu bị gây nhiễu bởi các thiết bị điện tử gia dụng như lò vi sóng"
        ],
        correctIndex: 1
    },
    {
        id: 33,
        question: "So sánh nào giữa sóng tần số thấp và sóng tần số cao là sai?",
        answers: [
            "a. Sóng tần số thấp thường vượt qua các vật cản tốt hơn sóng tần số cao",
            "b. Sóng tần số thấp thường có tốc độ truyền dữ liệu thấp hơn sóng tần số cao",
            "c. Sóng tần số cao thường có độ suy hao trong không khí thấp hơn, do đó khoảng cách truyền xa hơn sóng tần số thấp",
            "d. Sóng radio có thể phát ngang trên mặt đất (LoS) mà không bị giới hạn bởi đường chân trời"
        ],
        correctIndex: 2
    },
    {
        id: 34,
        question: "Hình vẽ sau đây mô tả về công nghệ wifi nào?",
        answers: [
            "a. OFDM",
            "b. Beamforming",
            "c. BSS Color",
            "d. MIMO"
        ],
        correctIndex: 3
    },
    {
        id: 35,
        question: "Mô tả nào chính xác về tia X?",
        answers: [
            "a. Thuộc loại sóng tần số cỡ THz",
            "b. Thuộc loại sóng tần số cỡ GHz (Viba), có ứng dụng trong mạng không dây",
            "c. Thuộc loại sóng tần số cỡ MHz (Radio), có ứng dụng trong mạng không dây",
            "d. Thuộc loại sóng tần số thấp, dưới 1MHz, không có ứng dụng trong mạng không dây"
        ],
        correctIndex: 0
    },
    {
        id: 36,
        question: "Mệnh đề nào mô tả sai về vấn đề Trạm ẩn?",
        answers: [
            "a. A và C vẫn tiếp tục truyền mà không biết rằng B không thể thu được tín hiệu của chúng",
            "b. A và C vẫn tiếp tục truyền mà không biết rằng tín hiệu của chúng bị xung đột",
            "c. Hai trạm A và C bị ẩn lẫn nhau",
            "d. Khi thấy tín hiệu phát đi bị xung đột, A sẽ dừng lại không phát tiếp nữa và chờ một khoảng thời gian ngẫu nhiên"
        ],
        correctIndex: 3
    },
    {
        id: 37,
        question: "Trước khi sử dụng kết nối không dây giữa hai tòa nhà, hiện trạng của hệ thống mạng trong hình là gì?",
        answers: [
            "a. Cả A và B đều có kết nối vào Internet, luồng thông tin giữa 2 tòa nhà được truyền qua Internet nên chất lượng đường truyền không ổn định",
            "b. Cả A và B đều có kết nối vào Internet, nhưng vướng đường quốc lộ xen giữa nên dữ liệu tử A không truyền được sang B và ngược lại",
            "c. Cước thuê bao Internet gấp hai lần, đồng thời không chuyển được thông tin từ A sang B",
            "d. Chỉ B có kết nối vào Internet, còn A không có"
        ],
        correctIndex: 0
    },
    {
        id: 38,
        question: "Mô tả nào về dải tần số ISM là sai?",
        answers: [
            "a. Viết tắt của Industrial - Scientific - Medical: Công nghiệp - Khoa học - Y tế",
            "b. Người sử dụng không phải xin giấy phép sử dụng tần số do Cục tần số vô tuyến điện cấp",
            "c. Thiết bị sử dụng tần số ISM phải chấp nhận có thể bị nhiễu từ thiết bị được cơ quan quản lý cho phép hoạt động",
            "d. Được sử dụng cho các hệ thống thông tin tầm xa"
        ],
        correctIndex: 3
    },
    {
        id: 39,
        question: "Kiến trúc 802.11 tập trung vào 2 tầng nào của mô hình mạng OSI?",
        answers: [
            "a. Tầng Vật lý và tầng Network",
            "b. Tầng Vật lý và tầng Datalink",
            "c. Tầng Vật lý và tầng Application",
            "d. Tầng Vật lý và tầng Transport"
        ],
        correctIndex: 1
    },
    {
        id: 40,
        question: "Mệnh đề nào mô tả sai về họ chuẩn 802.11?",
        answers: [
            "a. Chuẩn 802.11g là sự kết hợp các thông số kỹ thuật của hai chuẩn a và b trước đó",
            "b. Tần số 5 GHz ít bị can nhiễu bởi các thiết bị điện tử gia dụng",
            "c. Tín hiệu Infrared dễ bị chặn bởi các vật cản",
            "d. Chuẩn 802.11g ra đời sau chuẩn 802.11n và có tốc độ truyền cao hơn"
        ],
        correctIndex: 3
    },
    {
        id: 41,
        question: "Mô tả nào về những vấn đề của môi trường truyền không dây là sai?",
        answers: [
            "a. Khi các cell chồng lên nhau, các AP láng giềng không thể dùng cùng tần số nếu không sẽ gây nhiễu lẫn nhau",
            "b. Đặt cấu hình AP để vùng phủ sóng hẹp sẽ khắc phục tình trạng thiếu cổng kết nối để phục vụ máy trạm, đồng thời làm tăng băng thông dành cho máy trạm",
            "c. Để có thể roaming các máy trạm phải sử dụng cùng một địa chỉ mạng con (subnet IP)",
            "d. Khi giảm công suất phát của AP xuống, vùng phủ sóng bị thu hẹp dẫn tới số máy trạm có thể kết nối vào cũng giảm xuống, dẫn đến băng thông dành cho mỗi máy trạm cũng giảm"
        ],
        correctIndex: 1
    },
    {
        id: 42,
        question: "Mô tả nào về tên gọi, chức năng và hoạt động của Access Point là sai?",
        answers: [
            "a. Tủ tài liệu lớn bằng kim loại, những thiết bị điện gia dụng như lò vi sóng, tivi, thiết bị điều khiển từ xa đều là những vật cản hoặc gây nhiễu cho tín hiệu Wifi",
            "b. Hoạt động ở chế độ song công (full-duplex) như switch",
            "c. Trong khi các chuẩn Wifi tiên tiến như 802.11 ac, 802.11ax không ngừng cải thiện tốc độ truyền dữ liệu thì phạm vi vùng phủ sóng lại hầu như không thay đổi, chỉ vào khoảng 100 foot xung quanh Access Point",
            "d. Loại AP hỗ trợ 2 băng tần (2,4GHz và 5 GHz) có thể phục vụ được nhiều máy trạm hơn so với loại chỉ hoạt động ở một băng tần (2,4GHz hoặc 5 GHz)"
        ],
        correctIndex: 1
    },
    {
        id: 43,
        question: "Access Point trong hình (trên trang 12) hoạt động ở chế độ nào?",
        answers: [
            "a. Router mode",
            "b. Root mode",
            "c. Repeater mode",
            "d. Bridge mode"
        ],
        correctIndex: 1
    },
    {
        id: 44,
        question: "Mô tả nào về dải tần số ISM là sai?",
        answers: [
            "a. Viết tắt của Industrial - Scientific - Medical: Công nghiệp - Khoa học - Y tế",
            "b. Người sử dụng không phải xin giấy phép sử dụng tần số do Cục tần số vô tuyến điện cấp",
            "c. Được sử dụng cho các hệ thống thông tin tầm ngắn",
            "d. Viết tắt của Information - Scientific - Media"
        ],
        correctIndex: 3
    },
    {
        id: 45,
        question: "Những tín hiệu hoặc ứng dụng nào sau đây không sử dụng sóng vô tuyến tần số thấp, dưới 30 MHz?",
        answers: [
            "a. Mạng WLAN",
            "b. Tín hiệu được phản xạ bởi tầng điện ly để vượt khoảng cách hàng ngàn km",
            "c. Truyền tín hiệu vì mục đích cấp cứu, tìm kiếm cứu nạn trên biển",
            "d. Tín hiệu phát đi từ hộp đen máy bay"
        ],
        correctIndex: 0
    },
    {
        id: 46,
        question: "Access Point 2 trong hình (trên trang 13) hoạt động ở chế độ nào?",
        answers: [
            "a. Root mode",
            "b. Repeater mode",
            "c. Bridge mode",
            "d. Access Point mode"
        ],
        correctIndex: 1
    },
    {
        id: 47,
        question: "Access Point 2 trong hình (trên trang 13, sơ đồ nhà) hoạt động ở chế độ nào?",
        answers: [
            "a. Repeater mode",
            "b. Access Point mode",
            "c. Root mode",
            "d. Bridge mode"
        ],
        correctIndex: 3
    },
    {
        id: 48,
        question: "Mệnh đề nào mô tả sai về vấn đề Trạm ẩn?",
        answers: [
            "a. Hai trạm A và C bị ẩn lẫn nhau",
            "b. B không thể thu được tín hiệu của A và C do hiện tượng collision",
            "c. Tín hiệu từ A và C bị xung đột tại B",
            "d. Khi thấy tín hiệu phát đi bị xung đột, C sẽ dừng lại không phát tiếp nữa và chờ một khoảng thời gian ngẫu nhiên"
        ],
        correctIndex: 3
    },
    {
        id: 49,
        question: "So sánh nào giữa sóng tần số thấp và sóng tần số cao là sai?",
        answers: [
            "a. Một số loại sóng tần số cao có thể phản xạ với tầng điện ly để vượt qua đường chân trời",
            "b. Một số loại sóng tần số thấp có khả năng xuyên qua lớp nước biển để liên lạc với tàu ngầm",
            "c. Sóng tần số thấp thường vượt qua các vật cản tốt hơn sóng tần số cao",
            "d. Sóng tần số thấp thường có tốc độ truyền dữ liệu thấp hơn sóng tần số cao"
        ],
        correctIndex: 0
    },
    {
        id: 50,
        question: "Đâu không phải là mặt trái hay nhược điểm của mạng không dây?",
        answers: [
            "a. Dễ dàng bị can thiệp từ xa",
            "b. Dễ dàng bị thu trộm từ xa",
            "c. Băng thông rộng như cáp quang",
            "d. Dễ dàng bị phá sóng từ xa"
        ],
        correctIndex: 2
    },
    {
        id: 51,
        question: "Ứng dụng Bluezone cảnh báo COVID-19 trên điện thoại sử dụng môi trường truyền Bluetooth vì",
        answers: [
            "a. Nếu phát hiện ra một người nhiễm bệnh COVID-19 (F0), dữ liệu của người nhiễm bệnh đó sẽ được Cơ quan Y tế nhập lên hệ thống, từ đó chuyển xuống tất cả các thiết bị",
            "b. Ứng dụng Bluezone trên máy sẽ so sánh dữ liệu của F0 với lịch sử tiếp xúc được ghi nhận từ trước. Nếu phát hiện đã từng tiếp xúc với F0 trong thời gian đủ dài, hệ thống sẽ báo cho người sử dụng về nguy cơ có thể lây nhiễm bệnh (F1)",
            "c. Khoảng cách truyền phù hợp với khoảng cách cảnh báo tiếp xúc gần của bệnh COVID-19",
            "d. Nguyên tắc của Bluezone là bảo mật, ẩn danh và minh bạch. Chỉ cơ quan y tế có thẩm quyền mới biết những người nhiễm và người nghi nhiễm do tiếp xúc gần với người nhiễm COVID-19"
        ],
        correctIndex: 2
    },
    {
        id: 52,
        question: "Mệnh đề nào mô tả sai về chuẩn 802.11b",
        answers: [
            "a. Thông lượng tối đa 11 Mbps",
            "b. Sử dụng tần số 2,4 GHz",
            "c. Không tương thích với chuẩn 802.11a",
            "d. Phạm vi tín hiệu kém hơn chuẩn 802.11a"
        ],
        correctIndex: 3
    },
    {
        id: 53,
        question: "Mô tả nào về các giao thức bảo mật của Access Point là sai?",
        answers: [
            "a. WPA là giao thức bảo mật được công bố để thay thế cho WEP",
            "b. Cho tới nay WPA3 chưa bị phát hiện có lỗ hổng bảo mật nào",
            "c. Cho tới nay WPA3 là giao thức bảo mật Wifi mới nhất và đang được áp dụng rộng rãi nhất",
            "d. WEP là giao thức bảo mật WiFi được áp dụng sớm nhất"
        ],
        correctIndex: 1
    },
    {
        id: 54,
        question: "Mô tả nào về những vấn đề của môi trường truyền không dây là sai?",
        answers: [
            "a. Vùng phủ sóng của AP càng lớn thì số lượng máy trạm kết nối vào càng nhiều, dẫn đến băng thông dành cho mỗi máy trạm càng nhiều",
            "b. Để có thể roaming các máy trạm phải sử dụng cùng một địa chỉ mạng con (subnet IP)",
            "c. Khi các cell chồng lên nhau, các AP láng giềng không thể dùng cùng tần số nếu không sẽ gây nhiễu lẫn nhau",
            "d. Đặt cấu hình AP để vùng phủ sóng hẹp sẽ khắc phục tình trạng thiếu cổng kết nối để phục vụ máy trạm, đồng thời làm tăng băng thông dành cho máy trạm"
        ],
        correctIndex: 0
    },
    {
        id: 55,
        question: "Mô tả nào chính xác đối với tia X?",
        answers: [
            "a. Thuộc loại sóng tần số cỡ THz, không có ứng dụng trong mạng không dây",
            "b. Thuộc loại sóng tần số cỡ GHz (Viba), có ứng dụng trong mạng không dây",
            "c. Thuộc loại sóng tần số thấp, dưới 1 MHz, không có ứng dụng trong mạng không dây",
            "d. Thuộc loại sóng tần số cỡ MHz (Radio), có ứng dụng trong mạng không dây"
        ],
        correctIndex: 0
    },
    {
        id: 56,
        question: "Mô tả nào không đúng về mạng MANET?",
        answers: [
            "a. Các node mạng kết nối trực tiếp với những node khác trong vùng phủ sóng của mình",
            "b. Hiện đang được ứng dụng rộng rãi trong công nghệ và đời sống",
            "c. Sử dụng giao thức CSMA/CA",
            "d. Mỗi node mạng hoạt động như một máy trạm (host) kiêm router, liên lạc với những node ở xa thông qua những node trung gian"
        ],
        correctIndex: 2
    },
    {
        id: 57,
        question: "Mô tả nào chính xác về chuẩn công nghệ NB-IoT?",
        answers: [
            "a. Quy định về các thiết bị IoT sử dụng miền tần số (do băng dọng wifi) hẹp",
            "b. Là chuẩn về các thiết bị IoT sử dụng miền tần số (do băng dọng Hz) hẹp, có công suất (do băng dọng W) thấp",
            "c. Quy định về các thiết bị liên lạc vô tuyến sử dụng sóng điện thoại 4G, 5G. Các thiết bị này có nhiều ứng dụng trong IoT như giao thông thông minh, y tế thông minh, nông nghiệp thông minh",
            "d. Quy định về các thiết bị IoT sử dụng trong các lĩnh vực như nhà thông minh, xe tự hành... Các thiết bị này sử dụng dải tần ISM để liên lạc."
        ],
        correctIndex: 2
    },
    {
        id: 58,
        question: "Ứng dụng nào không phải của mạng MANET?",
        answers: [
            "a. Mạng kết nối các xe taxi",
            "b. Mạng phục vụ mục đích tìm kiếm cứu nạn",
            "c. Mạng LAN",
            "d. Mạng kết nối các đơn vị quân sự trên chiến trường"
        ],
        correctIndex: 2
    },
    {
        id: 59,
        question: "Xét trường hợp node A nhận được RREQ hỏi đường đi tới node X. Giả sử A không tìm thấy X trong routing table của mình, khi đó A sẽ ...",
        answers: [
            "a. Phát thông điệp RERR để báo lỗi cho toàn mạng",
            "b. Phát thông điệp RREP ra xung quanh để hỏi đường các hàng xóm của mình, nếu lifespan vẫn còn",
            "c. Phát thông điệp HELLO để hỏi đường các hàng xóm của mình",
            "d. Phát tiếp thông điệp RREQ ra xung quanh để hỏi đường các hàng xóm của mình, nếu lifespan vẫn còn"
        ],
        correctIndex: 3
    },
    {
        id: 60,
        question: "Khi nút A thu được thông điệp RREQ, chuyển tiếp xảy ra tiếp theo có thể là",
        answers: [
            "a. A không biết đường tới đích, nhưng lifespan của thông điệp RREQ đã cạn hết, do đó A sẽ gửi thông báo RREP",
            "b. A không biết đường tới đích, khi đó A sẽ gửi thông báo RREP",
            "c. A biết đường tới đích nên trả lại bằng thông điệp RERR",
            "d. A biết đường tới đích hoặc A chính là nút đích. Khi đó A sẽ gửi thông báo RREP"
        ],
        correctIndex: 3
    },
    {
        id: 61,
        question: "Xét tình huống sau đây: tại thời điểm bảng định tuyến của node 1 có nội dung như hình vẽ, nó bị mất liên lạc với node 2 và không còn coi node 2 là node láng giềng của mình nữa. Trong trường hợp này theo qui định của AODV node 1 phải làm gì?",
        answers: [
            "a. Xóa cả hai dòng trong bảng định tuyến, sau đó phát đi thông điệp RERR cảnh báo toàn mạng rằng 2 tuyến đường tương ứng đã bị hỏng",
            "b. Xóa dòng thứ nhất trong bảng định tuyến, sau đó phát đi thông điệp RERR cảnh báo toàn mạng rằng tuyến đường tương ứng đã bị hỏng",
            "c. Xóa dòng thứ hai trong bảng định tuyến, sau đó phát đi thông điệp RERR cảnh báo toàn mạng rằng tuyến đường tương ứng đã bị hỏng",
            "d. Phát đi thông điệp RERR cảnh báo toàn mạng rằng node 2 không còn là láng giềng của mình nữa"
        ],
        correctIndex: 3
    },
    {
        id: 62,
        question: "Mô tả nào về dự án Starlink là đúng?",
        answers: [
            "a. Đã hoạt động thử nghiệm tại Việt Nam nhưng công ty SpaceX chưa tiếp xúc chính thức với cơ quan chính phủ nước ta",
            "b. Đến thời điểm 9/2024, dịch vụ Internet vệ tinh của SpaceX mới chỉ hoạt động trong nội bộ nước Mỹ và châu Âu",
            "c. SpaceX là công ty đầu tiên nghĩ ra và cung cấp dịch vụ Internet không dây qua vệ tinh cho người dùng",
            "d. Mục tiêu là cung cấp kết nối Internet cho toàn thế giới thông qua vệ tinh"
        ],
        correctIndex: 3
    },
    {
        id: 63,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Tương tự như giao thức CSMA/CD của mạng hữu tuyến, CSMA/CA yêu cầu trạm phát phải 'lắng nghe' để phát hiện sóng mang trước khi phát tin",
            "b. Là giao thức giải quyết vấn đề truy cập đường truyền trong mạng Wifi",
            "c. Làm việc với họ chuẩn 802.11",
            "d. Sau khi nhận được gói tin và kiểm tra checksum thấy lỗi, trạm thu sẽ gửi lại ACK cho trạm phát"
        ],
        correctIndex: 0
    },
    {
        id: 64,
        question: "Mô tả nào SAI về hệ thống Fuel Injection trong xe máy, xe hơi?",
        answers: [
            "a. Còn gọi là hệ thống phun xăng điện tử",
            "b. Dựa vào những thông tin về tốc độ và tải trọng của xe, nhiệt độ của động cơ và không khí bên ngoài, bộ phận FI sẽ chọn thời điểm tốt nhất để kích hoạt bộ phận đánh lửa (bugi) trong buồng đốt nhiên liệu",
            "c. Sử dụng cảm biến để tự động thu thập thông tin về tốc độ và tải trọng của xe",
            "d. Sử dụng cảm biến để tự động thu thập thông tin về nhiệt độ của động cơ và của không khí bên ngoài xe"
        ],
        correctIndex: 1
    },
    {
        id: 65,
        question: "Khi một node muốn gửi dữ liệu nhưng không tìm thấy node đích trong bảng định tuyến của mình, nó sẽ phát đi thông điệp ...",
        answers: [
            "a. HELLO",
            "b. RERR",
            "c. RREP",
            "d. RREQ"
        ],
        correctIndex: 3
    },
    {
        id: 66,
        question: "Áp dụng thuật toán Dijkstra cho đồ thị sau đây với đỉnh xuất phát là A. Hãy cho biết nhãn ở vị trí dấu hỏi là gì?",
        answers: [
            "a. (7,A)",
            "b. (8,A)",
            "c. (7,B)",
            "d. (8,D)"
        ],
        correctIndex: 2
    },
    {
        id: 67,
        question: "Trước khi sử dụng kết nối không dây giữa hai tòa nhà, hiện trạng của hệ thống mạng trong hình là gì?",
        answers: [
            "a. Cước thuê bao Internet gấp hai lần, đồng thời không chuyển được thông tin từ A sang B",
            "b. Chỉ B có kết nối vào Internet, còn A không có",
            "c. Cả A và B đều có kết nối vào Internet, nhưng vướng đường quốc lộ xen giữa nên dữ liệu từ A không truyền được sang B và ngược lại",
            "d. Cả A và B đều có kết nối vào Internet, luồng thông tin giữa 2 tòa nhà được truyền qua Internet nên chất lượng đường truyền không ổn định"
        ],
        correctIndex: 0
    },
    {
        id: 68,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Là giao thức truy cập đường truyền, cũng hoạt động ở tầng con MAC như giao thức ALOHA",
            "b. Sau khi chờ hết khoảng thời gian SIFS, nếu đường truyền vẫn rảnh thì trạm phát sẽ phát các gói tin dữ liệu cho trạm thu",
            "c. Là giao thức giải quyết vấn đề truy cập đường truyền ở tầng con MAC",
            "d. Là giao thức giải quyết vấn đề truy cập đường truyền trong các mạng không dây cự ly ngắn như mạng Wifi"
        ],
        correctIndex: 1
    },
    {
        id: 69,
        question: "Một nút nhận được gói tin dữ liệu, lúc đó bảng định tuyến của nó có nội dung như trong hình vẽ. Nút cần phải làm gì trong tình huống này?",
        answers: [
            "a. Phát đi thông điệp RREQ",
            "b. Chuyển gói tin tới nút số 3",
            "c. Gửi gói tin về nút số 1",
            "d. Phát đi thông điệp RERR"
        ],
        correctIndex: 1
    },
    {
        id: 70,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Là giao thức giải quyết vấn đề truy cập đường truyền trong các mạng không dây cự ly ngắn như mạng Wifi",
            "b. Là giao thức giải quyết vấn đề truy cập đường truyền ở tầng con MAC",
            "c. Là giao thức truy cập đường truyền, cùng hoạt động ở tầng con MAC như giao thức ALOHA",
            "d. Sau khi lắng nghe và thấy đường truyền đang rảnh, trạm phát sẽ áp dụng chiến thuật p-persistent và phát ngay gói tin với xác suất là p"
        ],
        correctIndex: 3
    },
    {
        id: 71,
        question: "Mô tả nào không đúng về những vấn đề khó khăn của mạng MANET?",
        answers: [
            "a. Khác với Wifi, thiếu năng lượng cho các node mạng để hoạt động lâu dài là vấn đề khó khăn đối với mạng MANET",
            "b. Các node luôn di chuyển trong quá trình thu phát nên vấn đề định tuyến của mạng MANET khó giải quyết hơn ở mạng Wifi",
            "c. Do đặc thù của mạng MANET, vấn đề roaming được giải quyết dễ dàng hơn so với ở mạng Wifi",
            "d. Vì không sử dụng thiết bị thu phát trung gian nên các node mạng không bao giờ được đặt ở trạng thái 'sleep/standby', do đó năng lượng dự trữ càng bị tiêu hao nhanh"
        ],
        correctIndex: 2
    },
    {
        id: 72,
        question: "Sự cố nào khiến một node phải xóa đi 2 dòng trong bảng định tuyến như hình vẽ rồi phát đi thông điệp RERR để báo lỗi tuyến?",
        answers: [
            "a. Node nhận được thông điệp RERR thông báo về nút tối số 3, vốn không phải là node hàng xóm",
            "b. Node số 3 vừa xuất hiện và trở thành hàng xóm mới",
            "c. Sau khi chờ hết khoảng thời gian qui định mà node vẫn không nhận được thông điệp HELLO từ node số 3, vốn là hàng xóm",
            "d. Node nhận được thông điệp báo lỗi tuyến RERR từ node 3"
        ],
        correctIndex: 2
    },
    {
        id: 73,
        question: "Access Point trong hình hoạt động ở chế độ nào?",
        answers: [
            "a. Bridge mode",
            "b. Repeater mode",
            "c. Router mode",
            "d. Root mode"
        ],
        correctIndex: 2
    },
    {
        id: 74,
        question: "Mô tả nào về WSN là đúng?",
        answers: [
            "a. Trong đa số trường hợp, các nút mạng được cung cấp năng lượng từ lưới điện sinh hoạt",
            "b. Các nút mạng có thể liên lạc với nhau thông qua chuẩn IEEE 802.15.4 dành cho mạng không dây thấp và chậm",
            "c. Các nút mạng thường hoạt động theo giờ giấc của chủ nhân, nghĩa là chúng thường có một khoảng thời gian nghỉ ngơi trong ngày khi chủ nhân đi vắng hoặc ngủ",
            "d. Trong đa số trường hợp, các nút mạng là các máy tính cá nhân như máy tính để bàn, điện thoại thông minh hay smart tivi"
        ],
        correctIndex: 3
    },
    {
        id: 75,
        question: "Biết rằng giá trị DIFS của chuẩn 802.11 gốc là 128 $\mu s$, ngoài ra chuẩn này qui định mỗi slot time bằng 50 $\mu s$. Hỏi thời gian chờ cố định mà trạm phát phải chờ trước khi phát gói tin CTS là bao nhiêu?",
        answers: [
            "a. 28 $\mu s$",
            "b. Tất cả đều sai",
            "c. 178 $\mu s$",
            "d. 78 $\mu s$"
        ],
        correctIndex: 3
    },
    {
        id: 76,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Sau khi nhận được CTS, nếu trạm thu đang rảnh thì sẽ trả lời bằng gói tin CTS để trả lời rằng mình sẵn sàng tiếp nhận gói tin",
            "b. Sau khi nhận được CTS, trạm phát sẽ bắt đầu phát các gói tin",
            "c. Sau khi nhận được gói tin và kiểm tra checksum thấy lỗi, trạm thu sẽ gửi lại ACK cho trạm phát",
            "d. Sau khi phát một gói tin dữ liệu, trạm phát sẽ đặt đồng hồ đếm giờ. Nếu quá time out mà trạm phát không nhận được ACK thì nó coi như khung tin đã bị lỗi. Trạm phát sẽ chờ một khoảng thời gian $(2^i-1) \times (\text{slot time})$ trước khi phát lại khung tin với $i$ là số lần phát hỏng trước đó"
        ],
        correctIndex: 2
    },
    {
        id: 77,
        question: "Mô tả nào không đúng về mạng MANET?",
        answers: [
            "a. Không có hạ tầng truyền thông, các node mạng kiêm nhiệm vai trò của bộ định tuyến",
            "b. Có tính tùy biến, không yêu cầu cơ sở hạ tầng nên có thể được triển khai một cách nhanh chóng",
            "c. Các nút mạng có khả năng giao tiếp không dây và luôn trong trạng thái di chuyển",
            "d. Các node mạng thường đồng đều về mặt chủng loại và có cấu hình cao như Laptop PC"
        ],
        correctIndex: 3
    },
    {
        id: 78,
        question: "Mô tả nào không đúng về cơ chế hoạt động của giao thức AODV và các thông điệp tương ứng?",
        answers: [
            "a. Thông điệp và các gói dữ liệu được truyền được truyền từ nút này sang nút lân cận khác cho tới nút đích",
            "b. Giao thức AODV sử dụng trường lifespan nhằm loại bỏ hiện tượng thông điệp bị lặp vô hạn (loop)",
            "c. Giao thức AODV theo dõi quá trình truyền các message để khám phá và bảo trì tuyến đường",
            "d. Khi một node có nhu cầu truyền dữ liệu và không tìm thấy node đích trong bảng định tuyến của mình, nó sẽ phát đi thông điệp RREP"
        ],
        correctIndex: 3
    },
    {
        id: 79,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Tương tự như giao thức CSMA/CD của mạng hữu tuyến, trạm thu của giao thức CSMA/CA cũng sử dụng thông điệp NAK để báo tới khi nhận gói tin",
            "b. Tương tự như giao thức CSMA/CD của mạng hữu tuyến, CSMA/CA yêu cầu trạm phát phải 'nghe trong khi nói', nghĩa là 'nghe' đường truyền trong khi phát tin",
            "c. Sau khi nghe và thấy đường truyền đang rảnh, trạm phát phải tiếp tục chờ thêm khoảng thời gian DIFS nếu dự định phát gói tin dữ liệu",
            "d. Khác với giao thức CSMA/CD của mạng hữu tuyến, CSMA/CA không yêu cầu trạm phát phải 'nghe' đường truyền trong khi phát tin"
        ],
        correctIndex: 0
    },
    {
        id: 80,
        question: "Sau khi node A phát đi RREQ, nếu nhận được nhiều gói tin RREP thì A sẽ so sánh các tuyến đường nhận được dựa trên...",
        answers: [
            "a. Độ mới của tuyến (dựa trên Sequence number)",
            "b. Chiều dài tuyến (đo bằng km)",
            "c. Chiều dài tuyến (đo bằng hop count) và độ mới của tuyến (dựa trên Sequence number)",
            "d. Chỉ dựa trên chiều dài tuyến (đo bằng hop count)"
        ],
        correctIndex: 2
    },
    {
        id: 81,
        question: "Mô tả nào về việc phá sóng là đúng?",
        answers: [
            "a. Luật pháp nước ta qui định chỉ có cơ quan có thẩm quyền mới được phép sở hữu và sử dụng thiết bị phá sóng",
            "b. Nguyên nhân duy nhất làm cho liên lạc không dây bị gián đoạn là thiết bị phá sóng chuyên dụng",
            "c. Luôn có những cơ quan chức năng, như Cục tần số vô tuyến điện, giám sát và phát hiện thiết bị phá sóng trái phép",
            "d. Thiết bị phá sóng được sử dụng tự do nếu nó chỉ hoạt động trong dải tần số ISM"
        ],
        correctIndex: 0
    },
    {
        id: 82,
        question: "Mô tả nào đúng về mạng cảm biến không dây?",
        answers: [
            "a. Còn được gọi là mạng không dây thấp và chậm vì các nút mạng, chẳng hạn camera an ninh, thường đứng yên hoặc di chuyển chậm",
            "b. Có thể sử dụng chuẩn IEEE 802.15.4 để liên lạc. Đây là chuẩn công nghệ dành cho các node có cấu hình yếu, tốc độ truyền chậm",
            "c. Còn được gọi là mạng không dây thấp và chậm vì các nút mạng có tiêu thụ ít năng lượng và truyền dữ liệu chậm, chỉ vài Kbps",
            "d. Phải sử dụng những giao thức kết nối không dây đặc thù, chẳng hạn như IEEE 802.11, vì các nút có kích thước nhỏ nên ít năng lượng"
        ],
        correctIndex: 1
    },
    {
        id: 83,
        question: "Mô tả nào về các giao thức bảo mật của Access Point là sai?",
        answers: [
            "a. WPA là giao thức bảo mật được công bố để thay thế cho WEP",
            "b. Cho tới nay WPA3 chưa bị phát hiện có lỗ hổng bảo mật nào",
            "c. Cho tới nay WPA3 là giao thức bảo mật Wifi mới nhất và đang được áp dụng rộng rãi nhất",
            "d. WEP là giao thức bảo mật WiFi được áp dụng sớm nhất"
        ],
        correctIndex: 1
    },
    {
        id: 84,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Là giao thức truy cập đường truyền, cùng hoạt động ở tầng con MAC như giao thức ALOHA",
            "b. Là giao thức truy cập đường truyền phiên bản mới hơn được thiết kế để thay thế cho giao thức CSMA/CD",
            "c. Là giao thức giải quyết vấn đề truy cập đường truyền ở tầng con MAC",
            "d. Là giao thức giải quyết vấn đề truy cập đường truyền trong các mạng không dây cự ly ngắn như mạng Wifi"
        ],
        correctIndex: 1
    },
    {
        id: 85,
        question: "Nút nhận được thông điệp báo rằng nút 3 bị lỗi như hình vẽ, khi đó nút cần làm gì?",
        answers: [
            "a. Phát thông điệp RREQ tìm đường tới vị trí mới của nút 3",
            "b. Không cần làm gì",
            "c. Phát đi thông điệp RERR báo tuyến đường tới nút 3 đã hỏng",
            "d. Phát đi thông điệp RERR báo nút 3 đã hỏng"
        ],
        correctIndex: 2
    },
    {
        id: 86,
        question: "Khi một node muốn chào hỏi các node hàng xóm để tự giới thiệu mình, nó phát đi thông điệp...",
        answers: [
            "a. HELLO",
            "b. RERR",
            "c. RREQ",
            "d. RREP"
        ],
        correctIndex: 0
    },
    {
        id: 87,
        question: "Xét tình huống sau đây: tại thời điểm bảng định tuyến của node 5 có nội dung như hình vẽ, nó bị mất liên lạc với node 6 và không còn coi node 6 là node láng giềng của mình nữa. Trong trường hợp này theo qui định của AODV node 5 phải làm gì?",
        answers: [
            "a. Xóa cả hai dòng trong bảng định tuyến, sau đó phát đi thông điệp RERR cảnh báo toàn mạng rằng 2 tuyến đường tương ứng đã bị hỏng",
            "b. Xóa dòng thứ nhất trong bảng định tuyến, sau đó phát đi thông điệp RERR cảnh báo toàn mạng rằng tuyến đường tương ứng đã bị hỏng",
            "c. Xóa dòng thứ hai trong bảng định tuyến, sau đó phát đi thông điệp RERR cảnh báo toàn mạng rằng tuyến đường tương ứng đã bị hỏng",
            "d. Phát đi thông điệp RERR cảnh báo toàn mạng rằng node 6 không còn là láng giềng của mình nữa"
        ],
        correctIndex: 3
    },
    {
        id: 88,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Là giao thức giải quyết vấn đề truy cập đường truyền trong các mạng không dây cự ly ngắn như mạng Wifi",
            "b. Sau khi chờ hết khoảng thời gian SIFS, nếu đường truyền vẫn rảnh thì trạm phát sẽ phát các gói tin dữ liệu cho trạm thu",
            "c. Là giao thức giải quyết vấn đề truy cập đường truyền ở tầng con MAC",
            "d. Là giao thức truy cập đường truyền, cùng hoạt động ở tầng con MAC như giao thức ALOHA"
        ],
        correctIndex: 1
    },
    {
        id: 89,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Sau khi chờ hết khoảng thời gian SIFS, nếu đường truyền vẫn rảnh thì trạm phát sẽ gửi gói tin RTS để thăm dò xem trạm thu có sẵn sàng nhận hay không",
            "b. Tương tự như giao thức CSMA/CD của mạng hữu tuyến, trạm thu của giao thức CSMA/CA cũng sử dụng thông điệp ACK để báo nhận tốt",
            "c. Là giao thức giải quyết vấn đề truy cập đường truyền trong mạng Ethernet hữu tuyến",
            "d. Sau khi lắng nghe và thấy đường truyền đang rảnh, trạm phát phải tiếp tục chờ thêm khoảng thời gian SIFS nếu dự định phát gói tin điều khiển"
        ],
        correctIndex: 2
    },
    {
        id: 90,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Tương tự như giao thức CSMA/CD của mạng hữu tuyến, CSMA/CA yêu cầu trạm phát phải 'lắng nghe' để phát hiện sóng mang trước khi phát tin",
            "b. Sau khi nhận được gói tin và kiểm tra checksum thấy lỗi, trạm thu sẽ gửi lại ACK cho trạm phát",
            "c. Là giao thức giải quyết vấn đề truy cập đường truyền trong mạng Wifi",
            "d. Làm việc với họ chuẩn 802.11"
        ],
        correctIndex: 0
    },
    {
        id: 91,
        question: "Mô tả nào không đúng về cơ chế hoạt động của giao thức AODV và các thông điệp tương ứng?",
        answers: [
            "a. Thông điệp và các gói dữ liệu được truyền được truyền từ nút này sang nút lân cận khác cho tới nút đích",
            "b. Giao thức AODV sử dụng trường lifespan nhằm loại bỏ hiện tượng thông điệp bị lặp vô hạn (loop)",
            "c. Trường Sequence number có chức năng định đánh một tuyến đường, giúp phân biệt với những tuyến đường khác",
            "d. Giao thức AODV theo dõi quá trình truyền các message để khám phá và bảo trì tuyến đường"
        ],
        correctIndex: 2
    },
    {
        id: 92,
        question: "Mô tả nào không đúng về những vấn đề khó khăn của mạng MANET?",
        answers: [
            "a. Do đặc thù của mạng MANET, vấn đề roaming được giải quyết dễ dàng hơn so với ở mạng Wifi",
            "b. Không có hạ tầng truyền thông nên các node phải gánh thêm công việc của router, access point",
            "c. Các node luôn di chuyển tự do nên tuyến chuyển tiếp luôn thay đổi, topo mạng biến đổi không thể xác định trước tuyến đường chỉ hoạt động được trong thời gian rất ngắn",
            "d. Các node mạng thường không đồng đều về mặt chủng loại và có cấu hình thấp, khó cài đặt các ứng dụng mạng"
        ],
        correctIndex: 0
    },
    {
        id: 93,
        question: "Nút nhận được thông điệp báo rằng nút 3 bị lỗi như hình vẽ, khi đó nút cần làm gì?",
        answers: [
            "a. Phát thông điệp RREQ tìm đường tới vị trí mới của nút 3",
            "b. Không cần làm gì",
            "c. Phát đi thông điệp RERR báo tuyến đường tới nút 3 đã hỏng",
            "d. Phát đi thông điệp RERR báo nút 3 đã hỏng"
        ],
        correctIndex: 2
    },
    {
        id: 94,
        question: "Xét tình huống sau đây, tại thời điểm bảng định tuyến của node 3 có nội dung như hình vẽ, nó nhận được yêu cầu chuyển một gói tin data với thông tin như trong hình vẽ tới node đích. Trong trường hợp này theo qui định của AODV node 3 phải làm gì?",
        answers: [
            "a. Chuyển gói tin data tới node đích như bình thường",
            "b. Phát đi thông điệp chào hỏi các node xung quanh, sau đó nhờ chuyển tiếp gói tin",
            "c. Phát đi thông điệp hồi đường vì không biết đường để chuyển gói tin data",
            "d. Phát đi thông điệp báo lỗi vì không biết đường để chuyển gói tin data"
        ],
        correctIndex: 2
    },
    {
        id: 95,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Sau khi chờ hết khoảng thời gian SIFS, nếu đường truyền vẫn rảnh thì trạm phát sẽ gửi gói tin RTS để thăm dò xem trạm thu có sẵn sàng nhận hay không",
            "b. Sau khi nhận được CTS, nếu trạm thu đang rảnh thì sẽ trả lời bằng gói tin CTS để trả lời rằng mình sẵn sàng tiếp nhận gói tin",
            "c. Sau khi nhận được CTS, trạm phát sẽ bắt đầu phát các gói tin",
            "d. Tương tự như giao thức CSMA/CD của mạng hữu tuyến, trạm thu của giao thức CSMA/CA cũng sử dụng thông điệp ACK để báo nhận tốt"
        ],
        correctIndex: 2
    },
    {
        id: 96,
        question: "Mô tả nào về cơ chế thực hiện của giao thức CSMA/CA là sai?",
        answers: [
            "a. Sau khi chờ hết khoảng thời gian SIFS, nếu đường truyền vẫn rảnh thì trạm phát sẽ gửi gói tin RTS để thăm dò xem trạm thu có sẵn sàng nhận hay không",
            "b. Tương tự như giao thức CSMA/CD của mạng hữu tuyến, trạm thu của giao thức CSMA/CA cũng sử dụng thông điệp ACK để báo nhận tốt",
            "c. Là giao thức giải quyết vấn đề truy cập đường truyền trong mạng Ethernet hữu tuyến",
            "d. Sau khi lắng nghe và thấy đường truyền đang rảnh, trạm phát phải tiếp tục chờ thêm khoảng thời gian SIFS nếu dự định phát gói tin điều khiển"
        ],
        correctIndex: 2
    }
];
